/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import axios from 'axios';
import {FlatList} from 'react-native-gesture-handler';
import {Searchbar} from 'react-native-paper';
import GroceryItem from '../components/GroceryItem';
import StoreItem from '../components/StoreItem';

const Categories = ({route, navigation}) => {
  const {title} = route.params;
  const [subData, setSubData] = useState([]);
  navigation.setOptions({title: route.params.title});

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('okay ohhhhhhhhhhhhhhhhh');
        if (title === 'GROCERIES') {
          const response = await axios.get(
            'https://tradex.itskillscenter.com/api/categories/GROCERIES',
          );
          setSubData(response.data.data.subcategory);
        } else {
          const {allData} = require('./data');
          setSubData(allData.data.subcategory);
        }
      } catch (err) {
        console.log('err ohhhhhhhhhhhhhhhhh');
        console.log(err);
      }
    };
    fetchData();
    return () => {
      setSubData({});
    };
  }, [title]);

  const displayContent = () => {
    if (title === 'GROCERIES' && subData.length !== 0) {
      return (
        <View
          style={{
            margin: 20,
          }}>
          <FlatList
            data={subData}
            renderItem={({item}) => <GroceryItem item={item} />}
            keyExtractor={item => `${item.id}`}
          />
        </View>
      );
    } else if (title === 'Stores near me' && subData.length !== 0) {
      return (
        <View
          style={{
            margin: 20,
          }}>
          <FlatList
            data={subData}
            renderItem={({item}) => <StoreItem store={item} />}
            keyExtractor={item => `${item.id}`}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size={50} />
        </View>
      );
    }
  };

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={() => {}}
        // value={searchQuery}
      />

      {displayContent()}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  spinnerContainer: {
    margin: 40,
  },
});
