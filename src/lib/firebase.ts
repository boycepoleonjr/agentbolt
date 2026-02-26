import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdATC6WIvL2kuVBrF42hFw6ShGIsVsn40",
  authDomain: "agentbolt-ai.firebaseapp.com",
  projectId: "agentbolt-ai",
  storageBucket: "agentbolt-ai.firebasestorage.app",
  messagingSenderId: "18291387394",
  appId: "1:18291387394:web:5a5be836680530859c0b1b",
  measurementId: "G-FKWYXJ3LT8",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
