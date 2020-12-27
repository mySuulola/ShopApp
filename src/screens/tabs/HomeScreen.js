/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, ImageBackground, Image, Text, View} from 'react-native';
import {Searchbar, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';
import ShopCard from '../../components/ShopCard';

const storeProducts = [
  {
    id: 1,
    text: 'Stores near me',
    backgroundColor: 'rgba(202, 132, 74, 0.1)',
    image: (
      <Image
        source={require('../../assets/img/login.png')}
        style={{
          width: 70,
          height: 70,
        }}
      />
    ),
  },
  {
    id: 2,
    text: 'GROCERIES',
    backgroundColor: 'rgba(233, 35, 233, 0.1)',
    image: (
      <Image
        source={require('../../assets/img/login.png')}
        style={{
          width: 70,
          height: 70,
        }}
      />
    ),
  },
  {
    id: 3,
    text: 'Supermarket',
    backgroundColor: 'rgba(23, 35, 233, 0.1)',
    image: (
      <Image
        source={require('../../assets/img/login.png')}
        style={{
          width: 70,
          height: 70,
        }}
      />
    ),
  },
  {
    id: 4,
    text: 'Supermarket',
    backgroundColor: 'rgba(233, 135, 3, 0.1)',
    image: (
      <Image
        source={require('../../assets/img/login.png')}
        style={{
          width: 70,
          height: 70,
        }}
      />
    ),
  },
];

const HomeScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [user, setUser] = useState('Adeyemi');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/img/blue.png')}
        style={styles.topSection}>
        <View style={styles.topHeader}>
          <Avatar.Image
            size={40}
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
          />
          <Icon name="shoppingcart" size={30} color="#fff" />
        </View>
        <View style={styles.userContent}>
          <Text style={styles.greeting}> Hello {user},</Text>
          <Text style={styles.question}>What would you like to do today</Text>
          <Searchbar
            placeholder="Search for items or stores"
            onChangeText={query => setSearchText(query)}
            value={searchText}
            style={styles.searchBox}
          />
        </View>
      </ImageBackground>

      <View style={styles.bottomSection}>
        <Text style={styles.bottomText}>Shop from...</Text>
        <ScrollView horizontal={true}>
          {storeProducts.map(store => (
            <ShopCard

            key={store.id}
              backgroundColor={store.backgroundColor}
              text={store.text}
              imageElement={store.image}
              onPress={() => navigation.push('Category', {
                title: store.text
              })}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flex: 3,
    paddingBottom: 20,
    width: '100%',
  },
  bottomSection: {
    flex: 2,
  },
  topHeader: {
    height: 40,
    marginTop: 15,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 40,
    // borderColor: 'red',
  },
  userContent: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  greeting: {
    color: 'rgba(223, 113, 23, 0.9)',
    fontWeight: '900',
    fontSize: 18,
  },
  question: {
    color: '#fff',
    fontSize: 30,
    width: '80%',
    marginBottom: 10,
  },
  searchBox: {
    color: 'red',
    backgroundColor: 'rgba(230, 233, 235, 0.7)',
  },
  bottomText: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  }
});
