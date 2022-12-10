// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import firestore from "firebase/firestore"
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAjD_P4mEX0YkusOdCY8zQvnzL_X7-8oLQ",
    authDomain: "crud-udemy-2a7bb.firebaseapp.com",
    projectId: "crud-udemy-2a7bb",
    storageBucket: "crud-udemy-2a7bb.appspot.com",
    messagingSenderId: "1010525774566",
    appId: "1:1010525774566:web:01e8388a537cdcfb5d9127",
    measurementId: "G-7M9PDCGCH2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const auth = getAuth();
const db = firebase.firestore();
const auth = firebase.auth()
export { db, auth }