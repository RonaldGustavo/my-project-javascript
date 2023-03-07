// import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAyRo_lSrpUmAr_xEuRh0B7JYrNjl3iRw",
  authDomain: "loginauth-e014d.firebaseapp.com",
  projectId: "loginauth-e014d",
  storageBucket: "loginauth-e014d.appspot.com",
  messagingSenderId: "537336999793",
  appId: "1:537336999793:web:3eff66c04552f17d0850d0",
  measurementId: "G-YK7BSKHSY6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
