// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4zmLWwDLryFnF_872s7web5EoafSzsrE",
  authDomain: "netflix-clone-22594.firebaseapp.com",
  projectId: "netflix-clone-22594",
  storageBucket: "netflix-clone-22594.appspot.com",
  messagingSenderId: "992138462789",
  appId: "1:992138462789:web:067490488cb66d49a9852c"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth, db}

