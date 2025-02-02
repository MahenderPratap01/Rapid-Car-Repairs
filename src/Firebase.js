import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getDatabase } from "firebase/database";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDccfkz7w6DuW3SgioNMfgAUmuYEPkoHQg",
    authDomain: "rapid-car-repairs.firebaseapp.com",
    projectId: "rapid-car-repairs",
    storageBucket: "rapid-car-repairs.appspot.com",
    messagingSenderId: "166056864754",
    appId: "1:166056864754:web:41dcc9c02179483ace596b",
    databaseURL: "https://rapid-car-repairs-default-rtdb.firebaseio.com"
  };

 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
 //  export const db = getDatabase(app);
