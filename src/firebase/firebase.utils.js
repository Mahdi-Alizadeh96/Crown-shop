import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBrdiUGedWXtAa7YOm3T0UJ6WkQIPBmrrk",
    authDomain: "crowndb-b69ed.firebaseapp.com",
    projectId: "crowndb-b69ed",
    storageBucket: "crowndb-b69ed.appspot.com",
    messagingSenderId: "614379077743",
    appId: "1:614379077743:web:fb63a1f46b5f2a016c0d9a",
    measurementId: "G-79Z00LRD7F"
};

export const createUserProfileDocument = async (userAuth , addinitialData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    let snapShot = await userRef.get();
    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...addinitialData
            })
        } catch(error) {
            console.log('error in creating user' , error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
