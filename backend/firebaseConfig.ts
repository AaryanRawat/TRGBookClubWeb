import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectID: "",
    storageBucket: "",
    messageSenderId: "",
    appId: "",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };