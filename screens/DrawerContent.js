import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Linking, Alert, Modal} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  TouchableRipple,
  Drawer,
  Text,
  Switch,
} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function LoginApp() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View style={{flexDirection: 'row', marginTop: 15}}>
        <Avatar.Image size={50} />
        <View style={{flexDirection: 'column', marginLeft: 15}}>
          <Title style={styles.title}>DinSolicitors User</Title>
          <Caption style={styles.caption}></Caption>
        </View>
      </View>
    );
  }

  return (
    <View style={{flexDirection: 'row', marginTop: 15}}>
      <Avatar.Image size={50} />
      <View style={{flexDirection: 'column', marginLeft: 15}}>
        <Title style={styles.title}>Welcome</Title>
        <Caption style={styles.caption}>{user.email}</Caption>
      </View>
    </View>
  );
}

export function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfo}>
            <LoginApp />
            {/* <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph}>120</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View> */}
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="chat" color={color} size={size} />
              )}
              label="Chat"
              onPress={() => {
                props.navigation.navigate('StartChat');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="newspaper" color={color} size={size} />
              )}
              label="News"
              onPress={() => {
                props.navigation.navigate('News');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="compass" color={color} size={size} />
              )}
              label="Plans"
              onPress={() => {
                props.navigation.navigate('Plans');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="face-agent" color={color} size={size} />
              )}
              label="Contact Us"
              onPress={() => {
                Alert.alert(
                  'Contact Us',
                  'Tel: 01422  647 175 \nEmail: info@dinsolicitors.co.uk',
                ),
                  ['OK'];
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="twitter" color={color} size={size} />
              )}
              label="Follow us"
              onPress={() => {
                Linking.openURL('https://twitter.com/DinSolicitors');
              }}
            />
          </Drawer.Section>
          <Drawer.Section></Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            auth()
              .signOut()
              .then(() => console.log('User signed out!'));
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfo: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 3,
  },
  caption: {
    lineHeight: 14,
    fontSize: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preferences: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
