import React,{useState} from 'react'
import './Signup.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Signup() {
    const [userName,setUserName] = useState('')
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
        alert('Congratulations! '+user.displayName+' Signed In.')
// ...
        }).catch((error) => {
            console.log(error)
        });
    }
    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <div 
                className="loginScreen__logo">
                    <p><span>M</span>eerut</p>
                    <p><span>I</span>nstitute of</p>
                    <p><span>T</span>echnology</p>
                </div>

                <div className="loginScreen__gradient"></div>
            </div>
            <div className="loginScreen__body">
                        <h1>
                            Welcome to <span>Meerut Institute of Technology</span>
                        </h1>
                        <h2>
                            A unit of Vishnu Education Foundation
                        </h2>
                        <div className="loginScreen__input">
                            <form>
                                <button
                                    onClick={signInWithFirebase}
                                    className="loginScreen__getStarted">SIGN IN
                                </button>
                            </form>

                        </div>
            </div>
        </div>
    )
}
export default Signup
