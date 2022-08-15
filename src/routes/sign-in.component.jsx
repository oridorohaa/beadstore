import { signInWithGooglePopup } from "../utils/firebase/firebase.utils";
import { createUserDocFromAuth } from "../utils/firebase/firebase.utils";
const SignIn = () => {
  const logGoogleUser = async () => {
    //destructure response for user
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);

    // console.log(response);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
