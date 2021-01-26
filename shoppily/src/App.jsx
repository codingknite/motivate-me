import React, { useReducer, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import Detail from "./Detail";
import Cart from "./Cart";
import Checkout from "./Checkout";
import cartReducer from "./cartReducer";

let initialCart;
try {
  initialCart = JSON.parse(localStorage.getItem("cart")) ?? [];
} catch {
  console.error("Error Could not be parsed to JSON");
  initialCart = [];
}

export default function App() {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to Carved Rock Fitness</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route
              path="/:category/:id"
              element={<Detail dispatch={dispatch} />}
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} dispatch={dispatch} />}
            />
            <Route
              path="/checkout"
              element={<Checkout cart={cart} dispatch={dispatch} />}
            />
          </Routes>
        </main> 
      </div>
      <Footer />
    </>
  );
}
