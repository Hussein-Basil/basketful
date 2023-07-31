import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

import Home from "./routes/Home/index";
import Product from "./routes/Product/index";
import Layout from "./templates/Layout";
import Login from "./routes/Auth/Login";
import Register from "./routes/Auth/Register";
import Address from "./routes/Auth/Address";
import Payment from "./routes/Auth/Payment";
import Cart from "./routes/Cart/index";
import Checkout from "./routes/Checkout/index";
import Wishlist from "./routes/Wishlist/index";
import Profile from "./routes/Profile/index";
import Category from "./routes/Category/index";
import About from "./routes/About/index";
import Contact from "./routes/Contact/index";

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
              <Route element={<PersistLogin />}>
                <Route
                  element={
                    <RequireAuth
                      allowedRoles={[ROLES.User, ROLES.Admin, ROLES.Editor]}
                    />
                  }
                >
                  <Route path="/" element={<Home />} />
                </Route>
              </Route>
              <Route path="/product/:id" element={<Product />} />
              <Route path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/register/address" element={<Address />} />
              <Route exact path="/register/payment" element={<Payment />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/category/:id" element={<Category />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </ScrollToTop>
      </AuthProvider>
    </Router>
  );
}

export default App;
