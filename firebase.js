
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA04eSKBgeljO-Sa1uPV4qK9kf9ChBaf6Q",
    authDomain: "twitter-clone-6c371.firebaseapp.com",
    projectId: "twitter-clone-6c371",
    storageBucket: "twitter-clone-6c371.appspot.com",
    messagingSenderId: "235998569572",
    appId: "1:235998569572:web:a8654a7cfcc6968b0f2b71"
  };
  
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };


