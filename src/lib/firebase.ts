// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4FoVQ5uPmt3BMtkQ_xQkWajk4rvp3r7k",
  authDomain: "yusron-audina-wedding.firebaseapp.com",
  projectId: "yusron-audina-wedding",
  storageBucket: "yusron-audina-wedding.firebasestorage.app",
  messagingSenderId: "125847155861",
  appId: "1:125847155861:web:ae27ce408ac68ee183179c",
  measurementId: "G-94CPW8Z27Q"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Analytics (only in browser)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// Initialize Firestore
const db = getFirestore(app);

export { app, analytics, db };
