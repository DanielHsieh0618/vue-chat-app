// const functions = require('firebase-functions');
// const admin = require('firebase-admin');

// admin.initializeApp();

// exports.onMessageCreate = functions.firestore
//     .document('messages/{userId}')
//     .onCreate((snap, context) => {
//         // Check if limit is reached
//         const newValue = snap.data();
//         console.log(newValue);
//         const ref = admin.firestore().collection('messages').orderBy('timestamp');

//         ref.onSnapshot(snapshot => {
//             i = 0;
//             size = snapshot.size;
//             sizeToDelete = size - 10;
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