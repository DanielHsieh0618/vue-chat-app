import firebase from 'firebase/app';

// //still not to be used
//import firestore from "firebase/firestore"

// // Add the Firebase products that you want to use
// require("firebase/auth");
// require("firebase/firestore");

// Add the Firebase services that you want to use
// import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyABVTP2r0oHXeYeiwMghMlpew1Q590tqu4",
    authDomain: "real-time-database-edfa9.firebaseapp.com",
    databaseURL: "https://real-time-database-edfa9.firebaseio.com",
    projectId: "real-time-database-edfa9",
    storageBucket: "real-time-database-edfa9.appspot.com",
    messagingSenderId: "746790132554",
    appId: "1:746790132554:web:c21c02bb9b20f3465e7fb3",
    measurementId: "G-C1V4VKLV1D"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// firebaseApp.firestore().settings({ timestampsInSnapshots: true });
// firebase.analytics();

export default firebaseApp.firestore();

// export const auth = firebase.auth;
// export const db = firebase.database()