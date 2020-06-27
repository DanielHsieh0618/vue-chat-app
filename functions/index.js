const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const admin = require('firebase-admin');

admin.initializeApp();

// exports.onMessageCreate = functions.firestore
//     .document('messages/{userId}')
//     .onCreate((snap) => {
//         // Check if limit is reached
//         const newValue = snap.data();
//         console.log(newValue);
//         const ref = admin.firestore().collection('messages').orderBy('timestamp');

//         ref.onSnapshot(snapshot => {
//             let i = 0;
//             let size = snapshot.size;
//             let sizeToDelete = size - 10;
//             console.log('Messages Count: ' + size);

//             snapshot.forEach((doc) => {
//                 if (i < sizeToDelete) {
//                     doc.ref.delete().then(() => {
//                         console.log("Document successfully deleted");
//                     }).catch((error) => {
//                         console.log("Error removing document: ", error);
//                     });
//                 }
//                 i++;
//             });
//         });
//     });