import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import HomeImagePicker from './HomeImagePicker';

//import storage from '@react-native-firebase/storage';
// import { utils } from '@react-native-firebase/app';

// const reference = storage().ref('../assets/logo.png');

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <HomeImagePicker />

      {/* <Image
                style={{width:395, height:170}}
                source={ {uri:'https://images.unsplash.com/photo-1423592707957-3b212afa6733?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80'}}
            />
            <Text style={{fontSize:16, fontWeight:'bold'}}> Title#01</Text>
            <Text style={{fontSize:12, fontWeight:'normal'}}> Image Description will be shown here</Text> */}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
});
