import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNA2PZuXoaGK4dm3hSM4NgBz9PmgENHxo",
  authDomain: "bead-shop.firebaseapp.com",
  projectId: "bead-shop",
  storageBucket: "bead-shop.appspot.com",
  messagingSenderId: "389446205967",
  appId: "1:389446205967:web:39c8e6aeb5e1fb1f0bd97a",
  measurementId: "G-YT8C03TPP2",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  //   check if the instance of userDocRef exists in the database
  console.log(userSnapshot.exists());

  //create / set document with the data from userAuth
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (e) {
      console.log("error creating the user,", e.message);
    }
  }
  //   if user data exists
  return userDocRef;
};
