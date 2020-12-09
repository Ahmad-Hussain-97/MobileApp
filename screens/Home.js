import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

const Home = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>
                <Button
                    title="go to News"
                    onPress={()=>navigation.navigate("News")}>
                </Button>

             
            </Text>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });