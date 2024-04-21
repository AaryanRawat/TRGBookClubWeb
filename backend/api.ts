import { db } from './firebaseConfig'
import { collection, addDoc, getDocs } from 'firebase/firestore'

interface Book {
    title: string;
    author: string;
    cover: string;
}

const fetchBooks = async (): Promise<Book[]> => {
    try{
        const booksCollection = collection(db, 'books');
        const bookSnapshot = await getDocs(booksCollection);
        const bookList = bookSnapshot.docs.map(doc => doc.data() as Book);

        return bookList;
    }
    catch (e) {
        throw(e);
    }
};

const addBook = async (book: Book) => {
    try{
        const docRef = await addDoc(collection(db, 'books'), book);
        console.log('Document written with ID: ', docRef.id);
    }
    catch (e) {
        console.error('Error adding book: ', e);
    }
}