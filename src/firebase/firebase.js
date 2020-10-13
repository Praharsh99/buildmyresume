import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

import { v4 as uuidv4 } from 'uuid';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDmL4db958jd0XuohloXk2ChfEmS51bcV8',
  authDomain: 'buildmyresumeonline.firebaseapp.com',
  databaseURL: 'https://buildmyresumeonline.firebaseio.com',
  projectId: 'buildmyresumeonline',
  storageBucket: 'buildmyresumeonline.appspot.com',
  messagingSenderId: '938528605473',
  appId: '1:938528605473:web:03fabfaf61b3a1fd466a60',
  measurementId: 'G-VTY71253PP',
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
