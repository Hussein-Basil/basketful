import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Layout from "./templates/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Address from "./pages/Address";
import Payment from "./pages/Payment";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import Category from "./pages/Category";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import Store from "./pages/Store";

import RequireAuth from "./components/RequireAuth";
import AdminLayout from "./templates/AdminLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="*" element={<p>Not found</p>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route element={<RequireAuth />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/product/:id" element={<Product />} />
          <Route path="/store/:id" element={<Store />} />
          <Route exact path="/register/address" element={<Address />} />
          <Route exact path="/register/payment" element={<Payment />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<p>Error</p>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
