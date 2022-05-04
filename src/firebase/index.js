import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

//My Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyALsYjWRiWP7cMYLCqNQWhg3eG758APJFw",
    authDomain: "chatapp-95151.firebaseapp.com",
    projectId: "chatapp-95151",
    storageBucket: "chatapp-95151.appspot.com",
    messagingSenderId: "246585373727",
    appId: "1:246585373727:web:3dc25584fa04aee663112a"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };