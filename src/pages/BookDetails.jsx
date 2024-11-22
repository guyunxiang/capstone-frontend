import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./BookDetails.css";

const BookDetails = () => {
  const { bookId } = useParams(); // Get bookId from route params
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/books/${bookId}`);
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };

    fetchBook();
  }, [bookId]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-details-container">
      <div className="book-header">
        <img src={book.cover_image} alt={book.title} className="book-image" />
      </div>
      <div className="book-info">
        <h1 className="book-title">{book.title}</h1>
        <p className="book-description">{book.summary}</p>
        <p className="book-author">Author: {book.author}</p>
        <p className="book-publisher">Publisher: {book.publisher}</p>
        <button
          className="read-now-button"
          onClick={() => {
            // Pass bookId to the BookReader route
            navigate(`/book-reader/${bookId}`);
          }}
        >
          Read Now
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
