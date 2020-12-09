import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import News from './News';
import Plans from './Plans';
import Chat from './Chat';

const HomeStack = createStackNavigator();
const NewsStack = createStackNavigator();
const PlanStack = createStackNavigator();
const ChatStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTab = () => (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    style={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor:'#AB2727',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
       <Tab.Screen
      name="Chat"
      component={ChatStackScreen}
      options={{
        tabBarLabel: 'Chat',
        tabBarColor:'#AB2727',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="chat" color={color} size={26} />
        ),
      }}
    />  
     <Tab.Screen
        name="News"
        component={NewsStackScreen}
        options={{
        tabBarLabel: 'News',
        tabBarColor:'#AB2727',
        tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="newspaper" color={color} size={26} />
        ),
          }}
     />
    <Tab.Screen
      name="Plans"
      component={PlanStackScreen}
      options={{
        tabBarLabel: 'Plans',
        tabBarColor:'#AB2727',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="compass" color={color} size={26} />
        ),
      }}
    />
 
   
  </Tab.Navigator>
);

export default MainTab;

const HomeStackScreen =({navigation}) =>{
    return(
    <HomeStack.Navigator   screenOptions={{  headerStyle:{
        backgroundColor:'#AB2727',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}>
      <HomeStack.Screen name="Home" component={Home}
      options={{
        title:'Home',
        headerTitleAlign: 'center',
        headerLeft: ()=>(
          <Icon.Button name="menu" size={30} backgroundColor='#AB2727' onPress={()=>
            navigation.openDrawer() }/>
        )
      }} />
    </HomeStack.Navigator>
    )
  };
  
  const NewsStackScreen =({navigation}) =>{
    return(
    <NewsStack.Navigator   screenOptions={{  headerStyle:{
        backgroundColor:'#AB2727',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}>
      <NewsStack.Screen name="News" component={News} options={{
        title:'News',
        headerTitleAlign: 'center',
        headerLeft: ()=>(
          <Icon.Button name="menu" size={30} backgroundColor='#AB2727' onPress={()=>
            navigation.openDrawer() }/>
        )
      }} />
    </NewsStack.Navigator>
    )
  };

  const PlanStackScreen =({navigation}) =>{
    return(
    <PlanStack.Navigator   screenOptions={{  headerStyle:{
        backgroundColor:'#AB2727',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}>
      <PlanStack.Screen name="Plans" component={Plans} options={{
        title:'Plans',
        headerTitleAlign: 'center',
        headerLeft: ()=>(
          <Icon.Button name="menu" size={30} backgroundColor='#AB2727' onPress={()=>
            navigation.openDrawer() }/>
        )
      }} />
    </PlanStack.Navigator>
    )
  };

  const ChatStackScreen =({navigation}) =>{
    return(
    <ChatStack.Navigator   screenOptions={{  headerStyle:{
        backgroundColor:'#AB2727',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}>
      <ChatStack.Screen name="Chat" component={Chat} options={{
        title:'Chat',
        headerTitleAlign: 'center',
        headerLeft: ()=>(
          <Icon.Button name="menu" size={30} backgroundColor='#AB2727' onPress={()=>
            navigation.openDrawer() }/>
        )
      }} />
    </ChatStack.Navigator>
    )
  
  };