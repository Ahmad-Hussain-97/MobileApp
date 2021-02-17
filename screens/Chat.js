import React from 'react';
import {Text, View, Button, StyleSheet, TextInput, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const Chat = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
    
      <View style={styles.header}>
      <Image
                style={{width:40, height:40, borderRadius:20}}
                source={ {uri:'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'}}
            />  
            <View style={{flexDirection:'column'}}>
            <Text style={{fontSize:16, fontWeight:'bold'}}> Hamza Younus</Text>
            <Text style={{fontSize:12, fontWeight:'normal'}}> Image Description will be shown here</Text>
           </View>
      </View>
      <View style={styles.sender}>
        <Text style={{fontSize:17}}>   Hi..!</Text>
        <Text style={{fontSize:10}}>       2:12 pm</Text>
      </View>
      <View style={styles.reciver}>
        <Text style={{fontSize:17}}>                               Hi, How are you doing!</Text>
        <Text style={{fontSize:10}}>                                                                                               2:13 pm</Text>
      </View>
      <View style={styles.sender}>
        <Text style={{fontSize:17}}>   I am fine!</Text>
        <Text style={{fontSize:10}}>       2:13 pm</Text>
      </View>
      <View style={styles.sender}>
        <Text style={{fontSize:17}}>   Whats about you!</Text>
        <Text style={{fontSize:10}}>       2:14 pm</Text>
      </View>
      <View style={styles.reciver}>
        <Text style={{fontSize:17}}>          I am good. when you will be office!</Text>
        <Text style={{fontSize:10}}>                                                                                               2:15 pm</Text>
      </View>
      <View style={styles.sender}>
        <Text style={{fontSize:17}}>   See you soon!</Text>
        <Text style={{fontSize:10}}>       2:16 pm</Text>
      </View>


    <View style={styles.automsg}>
    <View style={styles.automsgin}>
      <Text style={{fontSize:13}}>   Update me about case position.  </Text>
      </View>
      <View style={styles.automsgin}>
      <Text style={{fontSize:13, }}>  When will you be available?  </Text>
      </View>
    </View>

      <TextInput
        placeholder="Type your message here..!"
        style={{marginLeft:2, borderColor:'#000000', borderRadius:10, borderWidth:0.3, marginTop:4}}>

      </TextInput>
    

    </ScrollView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sender:{
    marginTop:10,
    borderRadius:20,
    backgroundColor:'#cdcfd1',
    height:40,
    width:320,
    marginLeft:5,
    justifyContent:'center',
  },
  reciver:{
    marginTop:10,
    borderRadius:20,
    backgroundColor:'#80b6ed',
    height:40,
    width:320,
    marginLeft:63,
    justifyContent:'center',
  },
  header:{
    flexDirection:'row', 
    borderWidth:1,
    borderColor:'#e6ebf0',
    paddingVertical:10,
  },
  automsg:{
    flexDirection:'row', 
    marginVertical:5,
    
  },
  automsgin:{
    borderWidth:1,
    borderColor:'#a2adb8',
    borderRadius:10,
    marginHorizontal:3
  },
});