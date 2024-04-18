// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsv7fV3KtGOy4gwUyCStfTwqHh3YlfXm4",
  authDomain: "collabro-27732.firebaseapp.com",
  databaseURL: "https://collabro-27732-default-rtdb.firebaseio.com",
  projectId: "collabro-27732",
  storageBucket: "collabro-27732.appspot.com",
  messagingSenderId: "228242468254",
  appId: "1:228242468254:web:ea42ee1604aee6c814ba8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };