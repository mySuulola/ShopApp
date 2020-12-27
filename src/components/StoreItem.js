/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Image, Text, View, Dimensions} from 'react-native';
import {Chip} from 'react-native-paper';

const {width} = Dimensions.get('window');

const StoreItem = ({store}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: width - 50,
        borderWidth: 0.5,
        borderColor: '#000',
        marginVertical: 10,
        marginHorizontal: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
      }}>
      <View
        style={{
          width: 100,

          height: 100,
        }}>
        <Image
          style={{
            width: '100%',

            height: '100%',
          }}
          source={{uri: store.image}}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 15,
          paddingVertical: 5,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
          }}>
          {store.name}
        </Text>
        <Text>{store.address}</Text>
        <Text>{store.distance}km away</Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          {store.products.map((category, i) => (
            <Text
              key={category + i}
              style={{
                backgroundColor: 'rgba(25, 119, 195, 0.9)',
                marginRight: 10,
                marginTop: 10,
                padding: 2,

                color: 'rgba(240, 240, 240, 0.4)',
                borderRadius: 3,
                minWidth: 40,
                textAlign: 'center',
              }}>
              {category}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default StoreItem;

//const styles = StyleSheet.create({})
