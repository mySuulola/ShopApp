import React from 'react';
import { Title } from 'react-native-paper';
import { View, FlatList } from 'react-native';
import ProductCard from './ProductCard';


const GroceryItem = ({item}) => (
    <>
      <Title
      >{item.name}</Title>
      <View
        style={{
          //flex: 1,
          //  flexWrap: 'wrap',
          flexDirection: 'row',
        }}>
        <FlatList
          data={item.products}
          horizontal={true}
          renderItem={({item}) => <ProductCard product={item} />}
          keyExtractor={product => `${product.id}`}
        />
      </View>
    </>
  );
  
  


export default GroceryItem;
