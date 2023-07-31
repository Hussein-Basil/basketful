import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

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

import RequireAuth from "./components/RequireAuth";
import PersistLogin from "./components/PersistLogin";

const ScrollToTop = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return children;
};

const ROLES = {
  User: "user",
  Editor: "editor",
  Admin: "admin",
};

function App() {
  return (
    <Router forceRefresh={true}>
      <AuthProvider>
        <ScrollToTop>
          <Layout>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />

              <Route element={<PersistLogin />}>
                <Route path="/" element={<Home />} />

                
                <Route
                  element={
                    <RequireAuth
                      allowedRoles={[ROLES.User, ROLES.Admin, ROLES.Editor]}
                    />
                  }
                ></Route>
                <Route path="/product/:id" element={<Product />} />

                <Route exact path="/register/address" element={<Address />} />
                <Route exact path="/register/payment" element={<Payment />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/category/:id" element={<Category />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Route>
            </Routes>
          </Layout>
        </ScrollToTop>
      </AuthProvider>
    </Router>
  );
}

export default App;
