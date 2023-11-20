// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZUqgJ86A0mDpDc_3Y7gGN49TiuumNkLs",
  authDomain: "reservationform-4fa97.firebaseapp.com",
  projectId: "reservationform-4fa97",
  storageBucket: "reservationform-4fa97.appspot.com",
  messagingSenderId: "246796093317",
  appId: "1:246796093317:web:591cc3a75e005d9d1066ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
