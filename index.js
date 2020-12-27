/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const TestApp = () => (
    <App />
);

AppRegistry.registerComponent(appName, () => TestApp);
