import { getAuth } from '@firebase/auth';
import firebase from 'firebase/compat/app'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX8W4yK_CdzushplGr5Jvsw8K_r5I53LY",
  authDomain: "mit-btech-3rd-year.firebaseapp.com",
  projectId: "mit-btech-3rd-year",
  storageBucket: "mit-btech-3rd-year.appspot.com",
  messagingSenderId: "754778374346",
  appId: "1:754778374346:web:9a6011a7bbf2ddd9c33433",
  measurementId: "G-KLBH771G7F"
};

firebase.initializeApp(firebaseConfig);
const auth=getAuth();

export {auth};
export default firebase;