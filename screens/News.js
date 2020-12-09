import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

const News = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>
                <Button
                    title="go to Home"
                    onPress={()=>navigation.navigate("Home")}>
                </Button>
            </Text>
        </View>
    );
};

export default News;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });