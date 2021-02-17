import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image
} from 'react-native';


import { ScrollView } from 'react-native-gesture-handler';

const News = ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <Text style={{fontSize:16, fontWeight:'bold'}}> News #01</Text>
            <Text style={{fontSize:12, fontWeight:'normal'}}> Image Description will be shown here</Text>
            <Image
                style={{width:395, height:170}}
                source={ {uri:'https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80'}}
            />
            
        
            <Text style={{fontSize:16, fontWeight:'bold'}}> News #02</Text>
            <Text style={{fontSize:12, fontWeight:'normal'}}> Image Description will be shown here</Text>
            <Image
                style={{width:395, height:170}}
                source={ {uri:'https://images.unsplash.com/photo-1587846814306-22afe89cacfe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80'}}
            />


            <Text style={{fontSize:16, fontWeight:'bold'}}> News #03</Text>
            <Text style={{fontSize:12, fontWeight:'normal'}}> Image Description will be shown here</Text>

            <Image
                style={{width:395, height:170}}
                source={ {uri:'https://images.unsplash.com/photo-1593444285553-28163240e3f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'}}
            />
            
            <Text style={{fontSize:16, fontWeight:'bold'}}> News #04</Text>
            <Text style={{fontSize:12, fontWeight:'normal'}}> Image Description will be shown here</Text>
            <Image
                style={{width:395, height:170}}
                source={ {uri:'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'}}
            />
          
    
            
        </ScrollView>
    );
};

export default News;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignContent:'center',
    },
    
  });