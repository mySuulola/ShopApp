import {
  USER_AUTHENTICATION,
  UPDATE_FIRST_NAME,
  UPDATE_HOME_ADDRESS,
} from '../constant';

const initialUserState = {
  loggedIn: false,
  userDetail: [
    {
      label: 'First Name',
      value: 'Oluwaseyi',
      //     onPress: () => setIsNameVisible(true),
    },
    {label: 'Last Name', value: 'Suulola'},
    {label: 'Gender', value: 'Male'},
    {label: 'Date of Birth', value: 'October 27th 1982'},
    {label: 'Email', value: 'hi@suu.com.ng'},
    {label: 'Phone', value: '+2347061972413'},
    {
      label: 'Home address',
      value: 'Imam Moshood, Ilaje, Ajah',
      //    onPress: () => setIsAddressVisible(true),
    },
    {label: 'Next of Kin', value: 'Adegebo Ayomide'},
    {label: 'Bank Verification Number', value: 89123897231},
  ],
};

const userReducer = (state = initialUserState, action) => {
  console.log('action');
  console.log(action);
  console.log(action.type);
  switch (action.type) {
    case USER_AUTHENTICATION:
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
      };
    case UPDATE_FIRST_NAME:
      return {
        ...state,
        userDetail: [action.payload, ...state.userDetail.slice(1)],
      };
    case UPDATE_HOME_ADDRESS:
      return {
        ...state,
        userDetail: [
          ...state.userDetail.slice(0, 5),
          action.payload,
          ...state.userDetail.slice(7),
        ],
      };
    default:
      return state;
  }
};

export default userReducer;
