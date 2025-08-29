import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage"; // ✅ add this

const firebaseConfig = {
  apiKey: "AIzaSyBrJBoj6n-x4ZVG9X30tahPRQD1rxmLLNc",
  authDomain: "leo-club-website-01.firebaseapp.com",
  projectId: "leo-club-website-01",
  storageBucket: "leo-club-website-01.firebasestorage.app",
  messagingSenderId: "463663143306",
  appId: "1:463663143306:web:d7d31d97ea6d24c5c51073",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app); // ✅ initialize storage

export { db, auth, provider, storage }; // ✅ export storage too
