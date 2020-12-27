import React, {useState} from 'react';
import {StyleSheet, Image, Dimensions} from 'react-native';
import {Title} from 'react-native-paper';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import {ScrollView} from 'react-native-gesture-handler';

const {height} = Dimensions.get('screen');

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {/* <Image style={styles.image} source={require('../assets/img/login.png')} /> */}

      <Title style={styles.titleText}>Register</Title>
      <FormInput
        labelName="Full Name"
        value={email}
        autoCapitalize="words"
        onChangeText={userFullName => setFullName(userFullName)}
      />
      <FormInput
        labelName="Email"
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={userEmail => setEmail(userEmail)}
      />
      <FormInput
        labelName="Password"
        value={password}
        secureTextEntry={true}
        keyboardType="numeric"
        onChangeText={userPassword => setPassword(userPassword)}
      />
      <FormButton
        title="REgister"
        modeValue="contained"
        labelStyle={styles.loginButtonLabel}
      />
      <FormButton
        title="Login instead.."
        modeValue="text"
        uppercase={false}
        labelStyle={styles.navButtonText}
        onPress={() => navigation.goBack()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  scrollView: {
    //flex: 1,
    minHeight: height - 90,
    alignItems: 'center',
    justifyContent: 'center',
    //    borderWidth: 1,
    //  borderColor: 'red'
  },
  image: {
    width: 170,
    height: 170,
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
  },
  loginButtonLabel: {
    fontSize: 22,
  },
  navButtonText: {
    fontSize: 16,
  },
});

export default SignupScreen;
