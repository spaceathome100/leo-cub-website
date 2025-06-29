import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrJBoj6n-x4ZVG9X30tahPRQD1rxmLLNc",
  authDomain: "leo-club-website-01.firebaseapp.com",
  projectId: "leo-club-website-01",
  storageBucket: "leo-club-website-01.appspot.com",
  messagingSenderId: "463663143306",
  appId: "1:463663143306:web:d7d31d97ea6d24c5c51073"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
