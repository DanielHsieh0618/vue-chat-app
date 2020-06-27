
import * as firebase from "firebase/app";

// //still not to be used
//import firestore from "firebase/firestore"

// // Add the Firebase products that you want to use
// require("firebase/auth");
// require("firebase/firestore");

// Add the Firebase services that you want to use
import "firebase/auth";
// Required for side-effects
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
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
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

window.db = db;

//index.esm.js?abfd:106 [2020-06-26T08:59:03.125Z]  @firebase/firestore: Firestore (7.15.2): The setting 'timestampsInSnapshots: true' is no longer required and should be removed.
// firebaseApp.firestore().settings({ timestampsInSnapshots: true });
// firebase.analytics();

export default db;

// export const auth = firebase.auth;
// export const db = firebase.database()