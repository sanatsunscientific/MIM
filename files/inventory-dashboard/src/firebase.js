import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyArdfZT9PEYx_JNXzoWDPk1-_fGj7uvSb4",
    authDomain: "sunscimim.firebaseapp.com",
    projectId: "sunscimim",
    storageBucket: "sunscimim.firebasestorage.app",
    messagingSenderId: "959669191665",
    appId: "1:959669191665:web:f90b3c1199af1ba9953a50",
    measurementId: "G-WVD0JDMH6T"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
