import React, {useState} from 'react';
import {View, Button, Image, Text, StyleSheet} from 'react-native';
//import Fire from './Fire';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const HomeImagePicker = () => {
  const [photo, setphoto] = useState(null);
  const [cameraPhoto, setcameraPhoto] = useState(null);

  //   const upload = () => {
  //     Fire.addPhoto(photo)
  //       .then(() => {
  //         setphoto(null);
  //       })
  //       .catch((err) => {
  //         alert(err.message);
  //       });
  //   };

  pickImageHandler = () => {
    launchImageLibrary(
      {title: 'Pick an Image', maxWidth: 800, maxHeight: 600},
      (response) => {
        if (response.error) {
          console.log('image error');
        } else {
          console.log('Image: ' + response.uri);
        }
        if (response.uri) {
          setphoto(response);
        }
      },
    );
  };

  takeSnapHandler = () => {
    launchCamera(
      {saveToPhotos: true, maxWidth: 800, maxHeight: 600},
      (response) => {
        if (response.error) {
          console.log('camera Image error');
        } else {
          console.log('Camera Image: ' + response.uri);
        }
        if (response.uri) {
          setcameraPhoto(response);
        }
      },
    );
  };

  return (
    <View style={styles.container}>
      {photo === null ? (
        <Text>Image is not selected yet from Gallery</Text>
      ) : (
        <Image source={{uri: photo.uri}} style={styles.imageContainer} />
      )}

      <View styels={styles.button}>
        <Button title="Pick Image" onPress={pickImageHandler} />
      </View>
      {cameraPhoto === null ? (
        <Text>Image is not been captured by Camera</Text>
      ) : (
        <Image source={{uri: cameraPhoto.uri}} style={styles.imageContainer} />
      )}
      <View styels={styles.button}>
        <Button title="Open Camera" onPress={takeSnapHandler} />
      </View>

      {/* <View styels={styles.button}>
        <Button title="Upload" onPress={upload} />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '98%',
    height: 170,
  },
  button: {
    margin: 8,
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
});

export default HomeImagePicker;
