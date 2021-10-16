import React, {useRef} from 'react'
import { auth } from './firebase';
import "./LoginScreen.css"

function LoginScreen() {
        const emailRef = useRef(null);
        const passwordRef = useRef(null);
    
        const register = (e) => {
            e.preventDefault();
    
            auth.createUserWithEmailAndPassword(
                emailRef.current.value,
                passwordRef.current.value
            )
            .then((authUser) => {
                console.log(authUser)
            })
            .catch((error) => {
                alert(error.message)
            });
        };
     
        const signIn = (e) => {
            e.preventDefault();
            
            auth.signInWithEmailAndPassword(
                emailRef.current.value,
                passwordRef.current.value
            )
            .then((authUser) => {
                console.log(authUser)
            })
            .catch((error) => {
                alert(error.message)
            });
        };
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
                        <input ref={emailRef} placeholder="Email" type="email" />
                        <input ref={passwordRef} placeholder="Password" type="password" />
                        <button type='submit' onClick={signIn}>Sign In</button>
                        <h4>
                            <span className="signupScreen__gray">New to MIT? </span>
                            <span className="signupScreen__link" onClick={register}>Sign Up now</span>
                            </h4>
                    </form>

                </div>
            </div>
            </div>
    )
}
export default LoginScreen
