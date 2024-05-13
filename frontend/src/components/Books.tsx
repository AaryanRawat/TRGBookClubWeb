import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { collection, getDocs, QueryDocumentSnapshot } from 'firebase/firestore';
import { db } from '../../api/firebaseConfig'
import './Books.css'

interface Book {
  id: string;
  title: string;
  author: string;
  length: number;
  description: string;
  cover: string;
}

const Books: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksCollection = collection(db, 'bookClubBooks');
      const bookSnapshot = await getDocs(booksCollection);
      const bookList : any[] = bookSnapshot.docs.map((doc: QueryDocumentSnapshot) => ({
        id: doc.id,
        ...doc.data() as Omit<Book, 'id'>,
      }));

      setBooks(bookList);
    };

    fetchBooks();
  }, []);

  return (
    <div style={{display: 'flex', overflowX: 'auto', padding: '20px', gap: '20px'}}>
        {books.map((book) => (
          <Card key={book.id} sx={{width: 345, flexShrink: 0}}>
            <CardMedia
              component="img"
              height="140"
              image={book.cover}
              alt={book.title}
             />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {book.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Author: {book.author}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Length: {book.length} pages
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {book.description}
              </Typography>
            </CardContent>
            
          </Card>
        ))}
    </div>
  )
}

export default Books