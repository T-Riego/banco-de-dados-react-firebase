import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6UDXz53OiCZRjU6ejamv3cQvUGZ_7c-A",
  authDomain: "curso-17741.firebaseapp.com",
  projectId: "curso-17741",
  storageBucket: "curso-17741.firebasestorage.app",
  messagingSenderId: "108372182048",
  appId: "1:108372182048:web:d8e8a61786d811f5af6845",
  measurementId: "G-2CCSJYN365"
};

const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);

export { auth, db };

