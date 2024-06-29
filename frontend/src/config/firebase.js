import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBMSrv4FGqwagalwr05n7B6vUODUa310Rg",
    authDomain: "e-waste-management-1db37.firebaseapp.com",
    projectId: "e-waste-management-1db37",
    storageBucket: "e-waste-management-1db37.appspot.com",
    messagingSenderId: "1051816254826",
    appId: "1:1051816254826:web:f7aaf1e82779e0bb4b5913"
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, firestore, storage };