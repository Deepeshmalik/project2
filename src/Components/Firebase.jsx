// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Firestore,getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiz3oqAjL_vV7Dol1zY2hHOhFrTxJ3II0",
  authDomain: "fir-auth-123-2aa31.firebaseapp.com",
  projectId: "fir-auth-123-2aa31",
  storageBucket: "fir-auth-123-2aa31.appspot.com",
  messagingSenderId: "557152281439",
  appId: "1:557152281439:web:40637ee18c9579ebad0cea",
  measurementId: "G-RMHK6PEP0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth();
export const db =getFirestore(app);
export default app;
