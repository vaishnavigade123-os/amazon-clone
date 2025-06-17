// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsFFsobDdSg8KEVw8KFnAJ2PcoWiThScc",
  authDomain: "clone-8fa96.firebaseapp.com",
  projectId: "clone-8fa96",
  storageBucket: "clone-8fa96.appspot.com",
  messagingSenderId: "749837028675",
  appId: "1:749837028675:web:b7056db4426c0018a673f6",
  measurementId: "G-RNBQK9G47P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth()