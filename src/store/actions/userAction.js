import {USER_AUTHENTICATION, UPDATE_FIRST_NAME, UPDATE_HOME_ADDRESS} from '../constant';

export const userLogin = ({email, password}) => {
  return {
    type: USER_AUTHENTICATION,
    payload: {email, password},
  };
};
export const updateHomeAddress = ({label, value}) => {
  console.log('add address');
  return {
    type: UPDATE_HOME_ADDRESS,
    payload: {label, value},
  };
};
export const updateNextOfKin = ({label, value}) => {
  console.log('add address');
  return {
    type: UPDATE_HOME_ADDRESS,
    payload: {label, value},
  };
};

export const updateName = ({label, value}) => {
  console.log('got here');
  return {
    type: UPDATE_FIRST_NAME,
    payload: {label, value},
  };
};

export const userRegister = ({
  fullName,
  username,
  email,
  password,
  phoneNumber,
  gender,
}) => {
  return {
    type: 'USER_SIGNUP',
    payload: {email, password},
  };
};
