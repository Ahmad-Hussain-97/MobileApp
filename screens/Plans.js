import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { List } from 'react-native-paper';

const Plans = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <List.Section title="Explore">
      <List.Accordion
        title="Client Case Types"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Reference Case"
        left={props => <List.Icon {...props} icon="android-auto" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    <List.Accordion
        title="Case position"
        left={props => <List.Icon {...props} icon="domain" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
      <List.Accordion
        title="Workers"
        left={props => <List.Icon {...props} icon="account-multiple" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section>
     
    </ScrollView>
  );
};

export default Plans;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});