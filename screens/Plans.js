import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';


const Plans = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Plan Screen</Text>
      <Button
        title="click me!!"
        onPress={() => alert('Button Clicked')}
      />
    </View>
  );
};

export default Plans;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});