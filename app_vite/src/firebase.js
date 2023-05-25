import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDF0mtr8LutWbn2UsHSEkmG9vihu2f0B7Q",
  authDomain: "reactcoderhouse39665.firebaseapp.com",
  projectId: "reactcoderhouse39665",
  storageBucket: "reactcoderhouse39665.appspot.com",
  messagingSenderId: "946075343752",
  appId: "1:946075343752:web:0182ae9a1e1ed62b8ff83d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app); 