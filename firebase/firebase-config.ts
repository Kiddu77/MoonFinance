import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLgYP7XoHUC7Bs5psQSa86CyoKORryQJw",
  authDomain: "moonfinance-nayan.firebaseapp.com",
  projectId: "moonfinance-nayan",
  storageBucket: "moonfinance-nayan.appspot.com",
  messagingSenderId: "521711030617",
  appId: "1:521711030617:web:d74816a05c9adf0f41bc48",
  measurementId: "G-TE0XCJV7DL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and export
export const auth = getAuth(app);
