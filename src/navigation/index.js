import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CartScreen from '../screens/tabs/CartScreen';
import HomeScreen from '../screens/tabs/HomeScreen';
import NotificationScreen from '../screens/tabs/NotificationScreen';
import ProfileScreen from '../screens/tabs/ProfileScreen';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetail from '../screens/ProductDetail';
import TabBar from "./TabBar";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
        tabBar={props => <TabBar {...props} />}
        initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  )
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing" headerMode="none">
        <Stack.Screen name="Landing" component={TabNavigator} />
        <Stack.Screen name="Detail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default Routes;

