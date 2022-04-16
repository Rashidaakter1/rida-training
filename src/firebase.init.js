// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7SwYSuRooMyQDE9zaoyw6n03ZS-ILtkc",
  authDomain: "rida-training-fitness.firebaseapp.com",
  projectId: "rida-training-fitness",
  storageBucket: "rida-training-fitness.appspot.com",
  messagingSenderId: "23614364305",
  appId: "1:23614364305:web:3166b9e67dc0c149463d30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;