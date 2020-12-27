import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../screens/tabs/HomeScreen';
import CartScreen from '../screens/tabs/CartScreen';
import ProfileScreen from '../screens/tabs/ProfileScreen';
import WalletScreen from '../screens/tabs/WalletScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
import EditProfileScreen from '../screens/EditProfileScreen';
import Categories from '../screens/Categories';
import DeliveryAddressScreen from '../screens/DeliveryAddressScreen';

const Tab = createBottomTabNavigator();

const ProfileStack = createStackNavigator();
const StoreStack = createStackNavigator();

const Profile = () => {
  return (
    <ProfileStack.Navigator initialRouteName="Profile">
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          title: 'Edit Profile',
          headerStyle: {
            backgroundColor: 'rgba(248, 183, 188,0.3)',
            borderWidth: 0,
            height: 100,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <ProfileStack.Screen
        name="Delivery"
        component={DeliveryAddressScreen}
        options={{
          title: 'Delivery Address',
          headerStyle: {
            backgroundColor: 'rgba(248, 183, 188,0.3)',
            borderWidth: 0,
            height: 100,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </ProfileStack.Navigator>
  );
};
const Store = () => {
  return (
    <StoreStack.Navigator initialRouteName="Store">
      <StoreStack.Screen
        name="Store"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <StoreStack.Screen
        name="Category"
        component={Categories}
        options={{
          title: 'Categories',
        }}
      />
    </StoreStack.Navigator>
  );
};

const UserTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Store"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let iconColor;

            if (route.name === 'Store') {
              iconName = 'store';
            } else if (route.name === 'Wallet') {
              iconName = 'wallet';
            } else if (route.name === 'Cart') {
              iconColor = focused ? 'red' : 'green';
              iconName = 'cart';
            } else if (route.name === 'Profile') {
              iconName = 'account';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'rgba(9, 20, 175, 0.7)',
          inactiveTintColor: 'rgba(146, 144, 146, 0.3)',
        }}>
        <Tab.Screen name="Store" component={Store} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default UserTab;
