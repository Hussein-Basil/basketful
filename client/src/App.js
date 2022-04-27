import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './routes/Home/index'
import Product from './routes/Product/index'
import Layout from './templates/Layout'
import Login from './routes/Auth/Login'
import Register from './routes/Auth/Register'
import Address from './routes/Auth/Address'
import Payment from './routes/Auth/Payment'
import Cart from './routes/Cart/index'
import Checkout from './routes/Checkout/index'
import Wishlist from './routes/Wishlist/index'
import Profile from './routes/Profile/index'
import Category from './routes/Category/index'
import About from './routes/About/index'
import Contact from './routes/Contact/index'

const ScrollToTop = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return children
}

function App() {

  return (
    <Router forceRefresh={true}>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/product/:id" element={<Layout><Product /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route exact path="/register" element={<Layout><Register /></Layout>} />
          <Route exact path="/register/address" element={<Layout><Address /></Layout>} />
          <Route exact path="/register/payment" element={<Layout><Payment /></Layout>} />
          <Route path="/cart" element={<Layout><Cart /></Layout>} />
          <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
          <Route path="/wishlist" element={<Layout><Wishlist /></Layout>} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
          <Route path="/category/:id" element={<Layout><Category /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
        </Routes>
      </ScrollToTop>
    </Router>
  )
}

export default App
