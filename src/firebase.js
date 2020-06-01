import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCRcs6U6dVQIesMDX7kta87C0g1BdridfM",
  authDomain: "login-firebase-57fd7.firebaseapp.com",
  databaseURL: "https://login-firebase-57fd7.firebaseio.com",
  projectId: "login-firebase-57fd7",
  storageBucket: "login-firebase-57fd7.appspot.com",
  messagingSenderId: "1077538618627",
  appId: "1:1077538618627:web:25951df9a422add78b7d36",
  measurementId: "G-83ZG3DMPXP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;