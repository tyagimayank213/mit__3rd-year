import firebase from './config/firebase-config';
import React, {useRef} from 'react'
import "./LoginScreen.css"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


function LoginScreen() {
        const signInWithFirebase = (e) => {
            e.preventDefault();
            var provider = new GoogleAuthProvider();
            const auth = getAuth();
            signInWithPopup(auth, provider)
            .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
    // ...
            }).catch((error) => {
                console.log(error)
            });
        }
    return (
        <div className="loginScreen">
            <img className="loginscreen__image" src='images/loginscreenimage.jpg' alt="" />
            <div className="loginScreen__background">
                <div 
                className="loginScreen__logo">
                    <p><span>M</span>eerut</p>
                    <p><span>I</span>nstitute of</p>
                    <p><span>T</span>echnology</p>
                </div>
                <div className="loginscreen__gradiant" />
                
            </div>
            <div className="loginscreen__body">
            <div className="signupScreen">
                    <form>
                        <h1>Sign In</h1>
                        <button type='submit' onClick={signInWithFirebase}>Sign In</button>
                    </form>

                </div>
            </div>
            </div>
    )
}
export default LoginScreen
