import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Button} from 'react-native-paper';

const {width, height} = Dimensions.get('screen');

const FormButton = ({title, modeValue, ...rest}) => {
  return (
    <Button
      mode={modeValue} // text, outlined, contained
      {...rest}
      style={styles.button}
      contentStyle={styles.buttonContainer}>
      {title}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
  },
  buttonContainer: {
    width: width / 2,
    height: height / 15,
  },
});

export default FormButton;
