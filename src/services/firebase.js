
import * as firebase from "firebase/app";

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

let db = firebase.firestore();

export default db;