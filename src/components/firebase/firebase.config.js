// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGtd9P-KHJOxIUr5Ie1V7_UPKjpqujBdc",
  authDomain: "second-auth-milon.firebaseapp.com",
  projectId: "second-auth-milon",
  storageBucket: "second-auth-milon.firebasestorage.app",
  messagingSenderId: "647923227324",
  appId: "1:647923227324:web:162b4d95cee2f1c8340eb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth