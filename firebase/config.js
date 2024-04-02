// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-TyL7gng1G_bzfbqGg2bn3XqRzf7_wPo",
  authDomain: "learning-firebase-84e27.firebaseapp.com",
  projectId: "learning-firebase-84e27",
  storageBucket: "learning-firebase-84e27.appspot.com",
  messagingSenderId: "730465513813",
  appId: "1:730465513813:web:ec9e2628096b8fdf13ffdc"
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);        