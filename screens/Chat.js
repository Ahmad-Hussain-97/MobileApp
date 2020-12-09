import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';


const Chat = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Chat Screen</Text>
      <Button
        title="Click me!"
        onPress={() => alert('Button Clicked')}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});