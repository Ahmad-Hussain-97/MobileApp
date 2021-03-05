import React, {useEffect, useState} from 'react';
import firebaseConfig from './Config';
import * as firebase from 'firebase';
import 'firebase/firestore';

class Fire {
  constructor() {
    this.init();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  };

  //   uploadPhotoAsync = async (uri) => {
  //     const path = 'photos/${Date.now()}.jpg';
  //     return new Promise(async (res, rej) => {
  //       const response = await fetch(uri);
  //       const file = await response.blob();
  //       let upload = firebase.storage().ref(path).put(file);
  //       upload.on(
  //         'state_changed',
  //         (snapshot) => {},
  //         (err) => {
  //           rej(err);
  //         },
  //         async () => {
  //           const url = await upload.snapshot.ref.getDownloadURL();
  //           res(url);
  //         },
  //       );
  //     });
  //   };

  //   addPhoto = async (localUri) => {
  //     const remoteUri = await this.uploadPhotoAsync(localUri);
  //     return new Promise((res, rej) => {
  //       firebase.database().ref('/photos').push({
  //         timestamp: this.timestamp,
  //         image: remoteUri,
  //       });

  //       this.firestore
  //         .collection('photos')
  //         .add({
  //           timestamp: this.timestamp,
  //           image: remoteUri,
  //         })
  //         .then((ref) => {
  //           res(ref);
  //         })
  //         .catch((err) => {
  //           rej(err);
  //         });
  //     });
  //   };

  //   get firestore() {
  //     return firebase.firestore;
  //   }

  //   get timestamp() {
  //     return Date.now();
  //   }

  //----------------------------------------------------------------------

  send = (messages) => {
    messages.forEach((item) => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user,
      };
      console.log(item);
      //this.db.push(message);
    });
  };

  parse = (message) => {
    const {user, text, timestamp} = message.val();
    const {key: _id} = message;
    const createdAt = new Date(timestamp);

    return {
      _id,
      createdAt,
      text,
      user,
    };
  };

  get = (callback) => {
    this.db.on('child_added', (snapshot) => callback(this.parse(snapshot)));
  };

  off() {
    this.db.off();
  }
  get db() {
    return firebase.database().ref('messages');
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
}

// Fire.shared = new.Fire();
// export default Fire;
export default new Fire();
