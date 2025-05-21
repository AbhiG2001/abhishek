import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuCollection from "./Compnents/MenuCollection";
import LoginSignup from "./Compnents/LoginSignup";
import HomePage from "./Compnents/Home";
import About from "./Compnents/About";
import Footer from "./Compnents/Footer";
import Navbar from "./Compnents/Navbar";
import Blog from "./Compnents/Blog";
import Contact from "./Compnents/Contact";
import CartPage from "./Compnents/CartPage"; // <-- Updated to use new CartPage
import { CartProvider } from "./Compnents/CartContext"; // <-- Cart context

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<MenuCollection />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<LoginSignup />} />
          <Route path="/cart" element={<CartPage />} /> 
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
