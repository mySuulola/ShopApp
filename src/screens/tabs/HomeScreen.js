import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView, FlatList, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import CustomText from '../../components/CustomText';
import SearchInput from '../../components/SearchInput';
import ProductCard from '../../components/ProductCard';
import { APP_BLACK, APP_GREEN, APP_WHITE, categoryOptions } from '../../constants';
import Loader from '../../components/Loader';

const HomeScreen = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState('')
  const [plantList, setPlantList] = useState([])
  const [categorySelected, setCategorySelected] = useState(categoryOptions[0].value);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchAllPlants()
  }, [])

  const fetchAllPlants = async (limit = 8) => {
    try {
      setErrorMessage("")
      const requestCall = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
      const plantData = await requestCall.json();

      if (plantData.length > 0) {
        setPlantList(plantData)
      } else {
        setErrorMessage("Could not fetch plant data")
      }
    } catch (error) {
      setErrorMessage(error.message ?? "Could not fetch plant data")
    }
  }

  const renderItem = ({ item }) => (
    <ProductCard item={item} navigation={navigation} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <View>
          <CustomText fontWeight={"bold"} textColor={APP_BLACK} textSize={20} textContent="Welcome to" />
          <CustomText fontWeight={"bold"} textColor={APP_GREEN} textSize={30} textContent="Plant Shop" />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Landing', { screen: 'Cart' })}

        >
          <MaterialCommunityIcon name="cart" size={30} color={APP_BLACK} />
        </TouchableOpacity>
      </View>
      <View style={[styles.row, styles.m20]} >
        <SearchInput
          iconName="search"
          placeholder="Search"
          fieldValue={searchInput}
          setFieldState={setSearchInput} />
        <TouchableOpacity
          style={styles.filterBtn}>
          <EntypoIcon
            name="sound-mix"
            size={20}
            color={APP_WHITE}
            style={styles.filterIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={[styles.row, styles.m20, styles.pb20]} >
        {categoryOptions.map((item, index) => (
          <TouchableOpacity
            onPress={() => setCategorySelected(item.value)}
            key={index}>
            <Text style={[styles.uppercaseText, categorySelected === item.value && styles.selectedCategory]}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View>

      </View>
      {plantList.length > 0 ? (
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={plantList}
          renderItem={renderItem}
          keyExtractor={item => item.title}
        />
      ) : (
          <Loader errorMessage={errorMessage} fetchAllPlants={fetchAllPlants} />
        )}
      <View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#fff"
  },
  row: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center"
  },
  m20: {
    marginTop: 20,
  },
  selectedCategory: {
    color: "#00B761",
    borderBottomColor: "#00B761",
    borderBottomWidth: 2,
    borderStyle: 'solid',
  },
  coloredText: {
    color: "#fff",
    textTransform: "uppercase",
  },
  uppercaseText: {
    color: "#000",
    textTransform: "uppercase",
  },
  pb20: {
    paddingBottom: 20,
  },
  filterIcon: { padding: 10 },
  filterBtn: { backgroundColor: "#00B761", borderRadius: 12 },

})
