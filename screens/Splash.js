import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import InitDrawer from './InitDrawer';

const Splash = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="zoomIn"
          duration={2000}
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig" duration={500} >
        <Text style={styles.title}>Obtain Commercial & Personal Services</Text>
        <Animatable.View style={styles.button}animation="slideInLeft" duration={1500}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <LinearGradient
              colors={['#AB2727', '#6b6666']}
              style={styles.signIn}>
              <Text style={styles.textSign}>Employee</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animatable.View>
        <Animatable.View style={styles.button}animation="slideInRight" duration={1500}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}>
            <LinearGradient
              colors={['#AB2727', '#6b6666']}
              style={styles.signIn}>
              <Text style={styles.textSign}>Client     </Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animatable.View>
        <View >
          <TouchableOpacity  style={{marginTop:30, alignItems:'center'}}onPress={()=>{navigation.navigate('InitDrawer')}}>
              <Text >Sign in as Guest</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default Splash;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AB2727',
  },
  header: {
    flex: 1.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1.2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize:28,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
  },
  signIn: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:20,
  },
});
