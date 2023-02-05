import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyCyRhmgleXKW6HnFqaMgwy3vTLS3jMRWFM",
    authDomain: "sistema-chamados-36486.firebaseapp.com",
    projectId: "sistema-chamados-36486",
    storageBucket: "sistema-chamados-36486.appspot.com",
    messagingSenderId: "732187291935",
    appId: "1:732187291935:web:d194445d0118e688af802a",
    measurementId: "G-RV6Q70P7YT"
  };


const firebaseapp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseapp);
const db = getFirestore(firebaseapp);
const storage = getStorage(firebaseapp);

export {auth, db, storage};