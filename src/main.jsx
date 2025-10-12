import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import ShowNavAndFooter from "./pages/ShowNavAndFooter";
import HomeContent from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import AccountPage from "./pages/Account";
import CartPage from "./pages/cart";
import SignInPage from "./pages/SignInPage";
import ProductPage from "./pages/ProductPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<ShowNavAndFooter />}>
          <Route index element={<HomeContent />}></Route>
          <Route path="/" element={<SearchResults />}></Route>
          <Route path="/account" element={<AccountPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/product" element={<ProductPage />}></Route>
        </Route>
        <Route path="/signin" element={<SignInPage />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
