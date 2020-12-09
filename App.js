import React from 'react';

import { NavigationContainer } from '@react-navigation/native'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTab from './screens/MainTab';
import DrawerContent from './screens/DrawerContent';


const Drawer = createDrawerNavigator();



const App =()=>{
  

  return(
    <NavigationContainer >
      <Drawer.Navigator DrawerContent={props => <DrawerContent {... props}/>}>
        <Drawer.Screen name="Home" component={MainTab} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;
