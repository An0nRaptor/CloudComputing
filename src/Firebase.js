// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDCrnJqEAt2d9h503DO_GWljxHaUqk4yPM",
  authDomain: "linkedin-clone-63a2d.firebaseapp.com",
  projectId: "linkedin-clone-63a2d",
  storageBucket: "linkedin-clone-63a2d.appspot.com",
  messagingSenderId: "133642079476",
  appId: "1:133642079476:web:8ff0bfa29d92d6ab9ea2a1",
  measurementId: "G-4LC52TR2FS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
