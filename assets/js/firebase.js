import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
//import { getFirestore } from "firebase/firestore";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

/* import { getFirestore, collection, addDoc
} from "firebase/firestore"; */


const firebaseConfig = {
  apiKey: "AIzaSyB4E_YNVsQ9YtGZmF8fY4kEv6H-H8oZJyY",
  authDomain: "mup-brasil.firebaseapp.com",
  projectId: "mup-brasil",
  storageBucket: "mup-brasil.firebasestorage.app",
  messagingSenderId: "807536988673",
  appId: "1:807536988673:web:0b4537cd80fc9a9a896600",
  measurementId: "G-HSVWXH8V2R"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//const db = getFirestore(app);
//const analytics = getAnalytics(app);

// Exporta las funciones que necesitarás en otros archivos
export default createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const
 addDocumentToCollection = (collectionName, data) => {
    const collectionRef = collection(db, collectionName);
    return addDoc(collectionRef, data);
};