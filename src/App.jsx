import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchItems from "./components/SearchItems";
import { items } from "./components/Data";
import { useState } from "react";
function App() {
  const [item, setItem] = useState([...items]);
  const [cart, setCart] = useState([]);
  return (
    <>
      <Router>
        <Header cart={cart} />
        <NavBar setItem={setItem} />
        <Routes>
          <Route
            path="/"
            element={<Products items={item} cart={cart} setCart={setCart} />}
          />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/search/:term" element={<SearchItems />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
