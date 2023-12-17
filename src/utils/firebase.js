import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJq_ApO1Wkp01-_8BIsOKGcRLmgUyCJ-k",
  authDomain: "netflixai-167cc.firebaseapp.com",
  projectId: "netflixai-167cc",
  storageBucket: "netflixai-167cc.appspot.com",
  messagingSenderId: "337990410711",
  appId: "1:337990410711:web:f917645e8837dd7dc8eb92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
