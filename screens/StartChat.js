import React, {useState} from 'react';
import {
  Platform,
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {ScrollView, State} from 'react-native-gesture-handler';
import {GiftedChat} from 'react-native-gifted-chat';
import Fire from './Fire';

export default class StartChat extends React.Component {
  state = {
    messages: [],
  };

  get user() {
    return {
      _id: Fire.uid,
      name: 'You',
    };
  }

  componentDidMount() {
    Fire.get((message) =>
      this.setState((previous) => ({
        messages: GiftedChat.append(previous.messages, message),
      })),
    );
  }
  componentWillUnmount() {
    Fire.off();
  }

  render() {
    const chat = (
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.send}
        user={this.user}
      />
    );

    if (Platform === 'android') {
      return (
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior="padding"
          keyboardVerticalOffset={30}
          enabled>
          {chat}
        </KeyboardAvoidingView>
      );
    }
    // return (
    //   <View style={styles.container}>
    //     <Text>del commments</Text>
    //   </View>
    // );

    return <SafeAreaView style={{flex: 1}}>{chat}</SafeAreaView>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sender: {
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#cdcfd1',
    height: 40,
    width: 320,
    marginLeft: 5,
    justifyContent: 'center',
  },
  reciver: {
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#80b6ed',
    height: 40,
    width: 320,
    marginLeft: 63,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#e6ebf0',
    paddingVertical: 10,
  },
  automsg: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  automsgin: {
    borderWidth: 1,
    borderColor: '#a2adb8',
    borderRadius: 10,
    marginHorizontal: 3,
  },
});
