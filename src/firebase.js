import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDeqrMdboOSV0IOf4YdhIVeGuUoWOtUKvM",
    authDomain: "slack-clone-b902b.firebaseapp.com",
    projectId: "slack-clone-b902b",
    storageBucket: "slack-clone-b902b.appspot.com",
    messagingSenderId: "48027746538",
    appId: "1:48027746538:web:741193dd139e7e3fd9d793",
    measurementId: "G-FJK48FYV7L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db}