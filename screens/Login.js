import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    Button
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';



const Login = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
    });


    const textInputChange = (val) => {
        if( val.length !=0 ) {
            setData({
                ...data,
                name: val,
                check_textInputChange: true,
            });
        } else {
            setData({
                ...data,
                name: val,
                check_textInputChange: false,
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.length!= 0 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

   


    return (
        
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome Back!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: '#fff'
            }]}
        >
         <Text style={[styles.text_footer, {
                color: '#000'
            }]}>Email</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color='#000'
                    size={20}
                />
            <TextInput 
                    placeholder="Your Email"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                      color: '#000'
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>

                        

        <Text style={[styles.text_footer, {
            color: '#000',
            marginTop: 35
        }]}>Password</Text>
        <View style={styles.action}>
            <Feather 
                name="lock"
                color='#000'
                size={20}
            />
            <TextInput 
                placeholder="Your Password"
                placeholderTextColor="#666666"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={[styles.textInput, {
                    color: '#000'
                }]}
                autoCapitalize="none"
                onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity
                onPress={updateSecureTextEntry}
            >
                {data.secureTextEntry ? 
                <Feather 
                    name="eye-off"
                    color="grey"
                    size={20}
                />
                :
                <Feather 
                    name="eye"
                    color="grey"
                    size={20}
                />
                }
            </TouchableOpacity>
        </View>
           

        {/* <TouchableOpacity >
                <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text style={{color: '#009387', marginTop:15}}>Forgot </Text>
            </TouchableOpacity>
            <Button
                title="Google Sign-In"
                 onPress={() => this.onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
                />
                <PhoneSignIn /> */}
            <View style={styles.button}>
                <TouchableOpacity
                onPress={() => navigation.navigate('InitDrawer')}
                    style={styles.signIn} 
                >
                <LinearGradient
                    colors={['#AB2727', '#6b6666']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Sign In</Text>
                </LinearGradient>
                </TouchableOpacity>

                <View >
          <TouchableOpacity  style={{marginTop:40, alignItems:'center'}}onPress={()=>{navigation.navigate('Register')}}>
              <Text>  Don't have an account? Sign up</Text>
          </TouchableOpacity>
        </View>
            </View>
        </Animatable.View>
      </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#AB2727'
    },
    header: {
        flex: 1.3,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 1.7,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
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
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop:0,
        borderColor:'#000'
      
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#fff'
    },
    textSignUp: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#000'
    }
  });