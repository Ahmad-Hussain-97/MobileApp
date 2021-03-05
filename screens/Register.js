import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import InitDrawer from './InitDrawer';
import { GoogleSignin } from '@react-native-community/google-signin';
GoogleSignin.configure({
  webClientId: '591164342234-sdnnn2gm19m8v9adlmocefqsfrid7slt.apps.googleusercontent.com',
});

import auth from '@react-native-firebase/auth';

async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);

}


const Register = ({navigation}) => {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirm_password, setconfirm_password] = useState('');
  const [check_textInputChange, setcheck_textInputChange] = useState(false);
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  const [confirm_secureTextEntry, setconfirm_secureTextEntry] = useState(true);

  const textInputChange = (val) => {
    
    if (val.length !== 0) {
      setemail(val);
      setcheck_textInputChange(true);
    } else {
      setcheck_textInputChange(false);
    }
  };



  const handlePasswordChange = (val) => {
    setpassword(val);
  };

  const handleConfirmPasswordChange = (val) => {
    setconfirm_password(val);
  };

  const dosePasswordMatches = () =>{
    if(confirm_password !== password){
      Alert.alert('Error','Re-confirm your password. Please make sure your password match.',["OK"]);
    }
  }

  const updateSecureTextEntry = () => {
    setsecureTextEntry(!secureTextEntry);
  };

  const updateConfirmSecureTextEntry = () => {
   setconfirm_secureTextEntry(!confirm_secureTextEntry);
  };
  
  const handleSignUp = () => {
    auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {Alert.alert('Congrats!','The account has been created successfully. Login by using the same credentails.',["OK"]); navigation.navigate('Login')})
        .catch(error => {   
          switch(error.code) {
            case 'auth/email-already-in-use':
                  Alert.alert('Error','This email is already in use. Try another one!',["OK"])
                  break;
            case 'auth/weak-password':
                  Alert.alert('Error','The given password is invalid.[ Password should be at least 6 characters ]',["OK"])
                  break;
            case 'auth/user-not-found':
                  Alert.alert('Error','There is no user record corresponding to this identifier.',["OK"])
                  break;
          default:
              Alert.alert('Error',error.message,["OK"])
              break;
         }
       })
  };  

  return (
     
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Yourself..!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop:3,
              },
            ]}>
            Email
          </Text>
          <View style={styles.action}>
            <Feather name="user" color="#05375a" size={20} />
            <TextInput
              placeholder="Type Your Email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />
            {check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 25,
              },
            ]}>
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Type Your Password"
              secureTextEntry={secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 25,
              },
            ]}>
            Confirm Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Confirm Your Password"
              secureTextEntry={confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {confirm_secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <TouchableOpacity style={styles.signIn} onPress={ handleSignUp} >
              <LinearGradient
                colors={['#AB2727', '#6b6666']}
                style={styles.signIn}>
                <Text style={[styles.textSign, {color: '#fff'}]}>Sign Up</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View >
          <TouchableOpacity  style={{marginTop:15, alignItems:'center' ,justifyContent:'center', flexDirection:'row'}}onPress={() => onGoogleButtonPress().then(() => navigation.navigate("InitDrawer"))}>
              <FontAwesome name="google" size={20}  />
              <Text>  Using Google.</Text>
          </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity  style={{marginTop:15, alignItems:'center' ,justifyContent:'center', flexDirection:'row'}}onPress={()=>{navigation.navigate('PhoneAuthScreen')}}>
              <FontAwesome name="mobile" size={20}  />
              <Text>  Using Phone Number.</Text>
          </TouchableOpacity>
        </View>

        <View >
          <TouchableOpacity  style={{marginTop:30, alignItems:'center'}}onPress={()=>{navigation.navigate('Login')}}>
              <Text>  Already have an Account? Login</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </Animatable.View>
    </View>
    
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AB2727',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  footer: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 3,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 16,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  direction:{
    flexDirection:'row',
  },
});
