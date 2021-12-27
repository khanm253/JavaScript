import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBSppMuzYxrrcheAfPrjqbSG3h59ybRTzk",
    authDomain: "clone-40687.firebaseapp.com",
    projectId: "clone-40687",
    storageBucket: "clone-40687.appspot.com",
    messagingSenderId: "200652779511",
    appId: "1:200652779511:web:a869876867cf7cc78f48f2",
    measurementId: "G-4QEXFWT5YV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = firebase.auth.GoogleAuthProvider();

export {db, auth, provider};