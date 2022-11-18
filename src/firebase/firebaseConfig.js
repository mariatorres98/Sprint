// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9DwTTZUxyBX8h_NNcv1_KxqYKAo7_hLA",
  authDomain: "food-domicilio.firebaseapp.com",
  projectId: "food-domicilio",
  storageBucket: "food-domicilio.appspot.com",
  messagingSenderId: "666280549244",
  appId: "1:666280549244:web:85b3ed76e188ac2f18e2f9",
  measurementId: "G-T0PW4S786L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const dataBase = getFirestore(app);
export const google = new GoogleAuthProvider();
// const analytics = getAnalytics(app);
