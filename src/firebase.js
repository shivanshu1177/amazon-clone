import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH58bq5HiI2S59D2th1-wsLwdWuHcHtus",
  authDomain: "clone-d0425.firebaseapp.com",
  projectId: "clone-d0425",
  storageBucket: "clone-d0425.appspot.com",
  messagingSenderId: "88259617119",
  appId: "1:88259617119:web:f6d087eae856a3a7be16ea",
  measurementId: "G-SVB6K8YMVB",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};