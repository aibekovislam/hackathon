// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKn_PBnk4H1WKZQNrN-8iVKTM3g1GscGs",
  authDomain: "filmoon-18abe.firebaseapp.com",
  projectId: "filmoon-18abe",
  storageBucket: "filmoon-18abe.appspot.com",
  messagingSenderId: "965836207165",
  appId: "1:965836207165:web:44ef4627428970b4a2e654",
  measurementId: "G-Z1DFGL87XL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// const analytics = getAnalytics(app);