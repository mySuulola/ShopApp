import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ShopCard = ({text, imageElement, backgroundColor, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, {backgroundColor}]}>
      {imageElement}
      <Text style={styles.text}>{text}</Text>
      <Icon name="arrow-right" size={30} color="black" />
    </TouchableOpacity>
  );
};

export default ShopCard;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    padding: 20,
    height: 160,
    borderRadius: 10,
    justifyContent: 'center',
    // alignItems: 'center',

  },
  text: {
    marginTop: 5,
    marginBottom: 15,
    fontWeight: '800',
  },
});
