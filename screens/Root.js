import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Splash from './Splash';
import Login from './Login';
import Register from './Register';
import InitDrawer from './InitDrawer';
import { DrawerContent } from './DrawerContent';
import PhoneAuthScreen from './PhoneAuthScreen';

const RootStack = createStackNavigator();

const Root = ({navigation}) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="Splash" component={Splash} />
    <RootStack.Screen name="Login" component={Login} />
    <RootStack.Screen name="Register" component={Register} />
    <RootStack.Screen name="InitDrawer" component={InitDrawer} />
    <RootStack.Screen name="PhoneAuthScreen" component={PhoneAuthScreen} />
    <RootStack.Screen name="DrawerContent" component={DrawerContent}/>
  </RootStack.Navigator>
);

export default Root;
