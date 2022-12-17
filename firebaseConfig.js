// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALeTuyfrEtNZqOj8S1XVy4wL_inhUAZq4",
  authDomain: "glutten-c13ff.firebaseapp.com",
  projectId: "glutten-c13ff",
  storageBucket: "glutten-c13ff.appspot.com",
  messagingSenderId: "660089886527",
  appId: "1:660089886527:web:f9ba065a137c2cdc9ea58a",
  measurementId: "G-DJ5YCW0RZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const db = getFirestore();

export { auth, db };