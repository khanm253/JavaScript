import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, serverTimestamp, getDocs, orderBy, where } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut  } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyARqceIjrE_JTP6p2Mo_EAExIkFi23T4VA",
  authDomain: "gclone-dc668.firebaseapp.com",
  projectId: "gclone-dc668",
  storageBucket: "gclone-dc668.appspot.com",
  messagingSenderId: "7567333095",
  appId: "1:7567333095:web:32baf49609cce40fa53442",
  measurementId: "G-BWLJW8Y6HM"
});

const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {db , 
        addDoc, 
        collection, 
        serverTimestamp, 
        getDocs, 
        orderBy, 
        provider, 
        auth, 
        signInWithPopup, 
        onAuthStateChanged, 
        signOut,
        where, 
      };