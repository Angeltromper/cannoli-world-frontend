import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDMeuIAiHXL4T0hEYaQOEUM3a-qUo2uzVQ",
    authDomain: "eindproject firebaseapp.com",
    projectId: "eindproject",
    storageBucket: "eindproject.appspot.com",
    messagingSenderId: "",
    appId: ""
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

