import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

declare var require: any;
declare var process: any;

require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "",
    projectID: "",
    storageBucket: "",
    messageSenderId: "",
    appId: "",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };