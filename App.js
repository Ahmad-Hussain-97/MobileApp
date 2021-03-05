import React from 'react';
import {SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTab from './screens/MainTab';
//import { DrawerContent } from './screens/DrawerContent';

import Root from './screens/Root';
const Drawer = createDrawerNavigator();

const App =()=>{

  return(
      <NavigationContainer >
   
     <Root/>
     
        {/* <Drawer.Navigator drawerContent={props => <DrawerContent { ... props}/>}>
          <Drawer.Screen name="Home" component={MainTab} />
        </Drawer.Navigator> */}
     
      </NavigationContainer>
  );
}
export default App;
