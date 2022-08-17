import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../utils/firebase/firebase.utils";

import { createUserDocFromAuth } from "../utils/firebase/firebase.utils";

import SignUpForm from "../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  // remount the sign in component
  //on mount it will run ones
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocFromAuth(response.user);
  //     }
  //   }
  //   fetchData();
  // }, []);

  const logGoogleUser = async () => {
    //destructure response for user
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  // };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={logGoogleRedirectUser}>
        Sign in with Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
