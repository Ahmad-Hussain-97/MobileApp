import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  Button,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';
import InitDrawer from './InitDrawer';
import {ScrollView} from 'react-native-gesture-handler';

const Login = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [check_textInputChange, setcheck_textInputChange] = useState(false);
  const [secureTextEntry, setsecureTextEntry] = useState(true);

  const textInputChange = (val) => {
    if (val.length != 0) {
      setemail(val);
      setcheck_textInputChange(true);
    } else {
      setcheck_textInputChange(false);
    }
  };

  const handlePasswordChange = (val) => {
    if (val.length != 0) {
      setpassword(val);
    }
  };

  const updateSecureTextEntry = () => {
    setsecureTextEntry(!secureTextEntry);
  };

  const listenState = () => {
    console.log('listentoState_start');

    console.log('listentoState_end');
  };

  const handleLogin = () => {
    console.log('handleloginstart');
    let authed = auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('InitDrawer'))
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
            Alert.alert('Error', 'The email address is badly formatted!', [
              'OK',
            ]);
            break;
          case 'auth/wrong-password':
            Alert.alert(
              'Error',
              'The password is invalid or the user does not have a password!',
              ['OK'],
            );
            break;
          case 'auth/user-not-found':
            Alert.alert(
              'Error',
              'There is no user record corresponding to this identifier.',
              ['OK'],
            );
            break;
          default:
            Alert.alert('Error', error.message, ['OK']);
            break;
        }
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome Back!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: '#fff',
          },
        ]}>
        <ScrollView>
          <Text
            style={[
              styles.text_footer,
              {
                color: '#000',
              },
            ]}>
            Email
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#000" size={20} />
            <TextInput
              placeholder="Your Email"
              placeholderTextColor="#666666"
              style={[
                styles.textInput,
                {
                  color: '#000',
                },
              ]}
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
                color: '#000',
                marginTop: 35,
              },
            ]}>
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#000" size={20} />
            <TextInput
              placeholder="Your Password"
              placeholderTextColor="#666666"
              secureTextEntry={secureTextEntry ? true : false}
              style={[
                styles.textInput,
                {
                  color: '#000',
                },
              ]}
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
          <View style={styles.button}>
            <TouchableOpacity onPress={handleLogin} style={styles.signIn}>
              <LinearGradient
                colors={['#AB2727', '#6b6666']}
                style={styles.signIn}>
                <Text style={styles.textSign}>Sign In</Text>
              </LinearGradient>
            </TouchableOpacity>

            <View>
              <TouchableOpacity
                style={{marginTop: 40, alignItems: 'center'}}
                onPress={() => {
                  navigation.navigate('Register');
                }}>
                <Text> Don't have an account? Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AB2727',
  },
  header: {
    flex: 1.3,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 1.7,
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
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 0,
    borderColor: '#000',
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  textSignUp: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
