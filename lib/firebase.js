
import { getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "portfolibles-69667.firebaseapp.com",
  projectId: "portfolibles-69667",
  storageBucket: "portfolibles-69667.appspot.com",
  messagingSenderId: "933821625577",
  appId: "1:933821625577:web:649c4b56eb0ae93fc1ec78"
};

// Initialize Firebase
// const app =  IgetApp().lenght ? initializeApp(firebaseConfig) : getApp();
// const db = getFirestore(app);
// const storage = getStorage(app);

// export { db,storage }