import React, {useState} from 'react';
import {StyleSheet, Image, Dimensions} from 'react-native';
import {Title} from 'react-native-paper';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {userLogin} from '../store/actions/userAction';

const {height} = Dimensions.get('screen');

const LoginScreen = ({navigation, userLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('1')
    userLogin({email, password});
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Image style={styles.image} source={require('../assets/img/login.png')} />

      <Title style={styles.titleText}>Welcome to Chat App</Title>
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
        title="Login"
        modeValue="contained"
        onPress={() => handleLogin()}
        labelStyle={styles.loginButtonLabel}
      />
      <FormButton
        title="New user? Join here"
        modeValue="text"
        uppercase={false}
        onPress={() => navigation.push('Signup')}
        labelStyle={styles.navButtonText}
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
    fontSize: 20,
  },
  navButtonText: {
    fontSize: 13,
  },
});

export default connect(
  null,
  {userLogin},
)(LoginScreen);
