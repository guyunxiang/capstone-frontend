import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllBooks from "./pages/AllBooks";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BookReader from "./pages/BookReader";
import BookDetails from "./pages/BookDetails";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
       {/* <Route path="/all-books" element={<AllBooks />} />*/}
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        {/* <Route path="/book-viewer/:id" element={<BookViewer />} /> */}
        <Route path="/book-details/:bookId" element={<BookDetails />} />
        <Route path="/book-reader" element={<BookReader />} />
        <Route path="/book-reader/:bookId" element={<BookReader />} />



      </Routes>
      <Footer />
    </div>
  );
};

export default App;
