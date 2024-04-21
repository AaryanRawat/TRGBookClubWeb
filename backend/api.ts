import { db } from './firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

interface Book {
    title: string;
    author: string;
    cover: string;
}