import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';





const DeliveryAddressScreen = ({userDetail}) => {
  const [isDeliveryAddressVisible, setIsDeliveryAddressVisible] = useState(false);

  return (
    <View style={styles.container}>
        <Text>hi</Text>
      
    </View>
  );
};

const mapStateToProps = state => ({
  userDetail: state.user.userDetail,
});

export default connect(
  mapStateToProps,
  null,
)(DeliveryAddressScreen);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  outer: {width: '100%'},
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  textLabel: {
    color: 'rgba(187, 184, 185, 1.0)',
    fontWeight: 'bold',
  },
  textValue: {
    fontWeight: 'bold',
  },
});
