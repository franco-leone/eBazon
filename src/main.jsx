import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import HomeContent from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import AccountPage from "./pages/Account";
import CartPage from "./pages/cart";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<HomeContent />}></Route>
        <Route path="/" element={<SearchResults />}></Route>
        <Route path="/account" element={<AccountPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
