import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Splash from './Splash';
import Login from './Login';
import Register from './Register';
import InitDrawer from './InitDrawer';

const RootStack = createStackNavigator();

const Root = ({navigation}) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="Splash" component={Splash} />
    <RootStack.Screen name="Login" component={Login} />
    <RootStack.Screen name="Register" component={Register} />
    <RootStack.Screen name="InitDrawer" component={InitDrawer} />
  </RootStack.Navigator>
);

export default Root;
