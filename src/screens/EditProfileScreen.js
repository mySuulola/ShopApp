import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Divider} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import UpdateName from '../modals/UpdateName';
import UpdateAddress from '../modals/UpdateAddress';
import {connect} from 'react-redux';
import UpdateNextOfKin from '../modals/UpdateNextOfKin';

const EditProfileScreen = ({userDetail}) => {
  const [isNameVisible, setIsNameVisible] = useState(false);
  const [isAddressVisible, setIsAddressVisible] = useState(false);
  const [isNextOfKinVisible, setIsNextOfKin] = useState(false);

  return (
    <View style={styles.container}>
      {userDetail.map(item => (
        <View key={item.label} style={styles.outer}>
          <TouchableOpacity
            onPress={() => {
              if (item.label === 'First Name') {
                return setIsNameVisible(true);
              } else if (item.label === 'Home address') {
                return setIsAddressVisible(true);
              } else if (item.label === 'Next of Kin') {
                return setIsNextOfKin(true);
              }
            }}
            style={styles.button}>
            <Text style={styles.textLabel}>{item.label}</Text>

            <Text style={styles.textValue}>{item.value}</Text>
          </TouchableOpacity>
          <Divider />
        </View>
      ))}
      <UpdateName
        isNameVisible={isNameVisible}
        setIsNameVisible={setIsNameVisible}
      />
      <UpdateAddress
        isAddressVisible={isAddressVisible}
        setIsAddressVisible={setIsAddressVisible}
      />
      <UpdateNextOfKin
        isNextOfKinVisible={isNextOfKinVisible}
        setIsNextOfKin={setIsNextOfKin}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  userDetail: state.user.userDetail,
});

export default connect(
  mapStateToProps,
  null,
)(EditProfileScreen);

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
