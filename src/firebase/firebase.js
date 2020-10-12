import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

import { v4 as uuidv4 } from 'uuid';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDRu8dYZZNyj9EQzWsEeAsRUyt88JzMOl4',
  authDomain: 'buildmyresume-3e83c.firebaseapp.com',
  databaseURL: 'https://buildmyresume-3e83c.firebaseio.com',
  projectId: 'buildmyresume-3e83c',
  storageBucket: 'buildmyresume-3e83c.appspot.com',
  messagingSenderId: '564396714832',
  appId: '1:564396714832:web:406491fccd437c56ddda55',
  measurementId: 'G-F7135FHVKC',
};

firebase.initializeApp(firebaseConfig);

// Create a reference with an initial file path and name
var storage = firebase.storage();
var storageRef = storage.ref();

export const uploadProfilePicture = async (file, mimeType) => {
  var extension = mimeType.split('/')[1];

  var uniqueFileName = uuidv4();
  var profilePictureRef = storageRef.child(
    `profile-pictures/${uniqueFileName}.${extension}`
  );

  const response = await profilePictureRef
    .put(file)
    .then(async (snapshot) => {
      return await profilePictureRef
        .getDownloadURL()
        .then((url) => new Promise((resolve) => resolve(url)))
        .catch((err) => new Promise((resolve, reject) => reject(err)));
    })
    .catch((err) => new Promise((resolve, reject) => reject(err)));

  return response;
};

export default storageRef;
