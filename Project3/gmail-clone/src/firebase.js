import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, serverTimestamp, getDocs, orderBy } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = initializeApp({
    apiKey: "AIzaSyBSppMuzYxrrcheAfPrjqbSG3h59ybRTzk",
    authDomain: "clone-40687.firebaseapp.com",
    projectId: "clone-40687",
    storageBucket: "clone-40687.appspot.com",
    messagingSenderId: "200652779511",
    appId: "1:200652779511:web:a869876867cf7cc78f48f2",
    measurementId: "G-4QEXFWT5YV"
  });

const db = getFirestore();

export {db , addDoc, collection, serverTimestamp, getDocs, orderBy};