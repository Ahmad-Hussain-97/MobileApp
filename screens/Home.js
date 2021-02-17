import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Home = ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            
            <Image
                style={{width:395, height:170}}
                source={ {uri:'https://images.unsplash.com/photo-1423592707957-3b212afa6733?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80'}}
            />
            <Text style={{fontSize:16, fontWeight:'bold'}}> Title#01</Text>
            <Text style={{fontSize:12, fontWeight:'normal'}}> Image Description will be shown here</Text>
        

            <Image
                style={{width:395, height:170}}
                source={ {uri:'https://images.unsplash.com/photo-1568092806323-8ec13dfa9b92?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'}}
            />
            <Text style={{fontSize:16, fontWeight:'bold'}}> Title#02</Text>
            <Text style={{fontSize:12, fontWeight:'normal'}}> Image Description will be shown here</Text>

            <Image
                style={{width:395, height:170}}
                source={ {uri:'https://images.unsplash.com/photo-1589216532372-1c2a367900d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'}}
            />
            <Text style={{fontSize:16, fontWeight:'bold'}}> Title#03</Text>
            <Text style={{fontSize:12, fontWeight:'normal'}}> Image Description will be shown here</Text>
        
            <Image
                style={{width:395, height:170}}
                source={ {uri:'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'}}
            />
            <Text style={{fontSize:16, fontWeight:'bold'}}> Title#04</Text>
            <Text style={{fontSize:12, fontWeight:'normal'}}> Image Description will be shown here</Text>
    
            
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignContent:'center',
    },
  });