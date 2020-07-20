import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAEahqfKPDyyoXnkAf1mC5afagJohzTFqA",
    authDomain: "athena-clothing-db.firebaseapp.com",
    databaseURL: "https://athena-clothing-db.firebaseio.com",
    projectId: "athena-clothing-db",
    storageBucket: "athena-clothing-db.appspot.com",
    messagingSenderId: "773395463582",
    appId: "1:773395463582:web:f2e2385cbdbcbe4415ea8f",
    measurementId: "G-1090ZBM2XJ"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;