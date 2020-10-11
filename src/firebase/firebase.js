import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

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
// var pathReference = storage.ref('images/sketch-short.jpeg');

// // Create a reference from an HTTPS URL
// // Note that in the URL, characters are URL escaped!
// var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg');

export default storageRef;
