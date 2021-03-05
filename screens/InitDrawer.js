import React from 'react';

import { NavigationContainer } from '@react-navigation/native'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTab from './MainTab';
import { DrawerContent } from './DrawerContent';



const Drawer = createDrawerNavigator();

const InitDrawer =()=>{

  return(
      <NavigationContainer  independent={true}>
        <Drawer.Navigator drawerContent={props => <DrawerContent { ... props}/>}>
          <Drawer.Screen name="Home" component={MainTab} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}
export default InitDrawer;
