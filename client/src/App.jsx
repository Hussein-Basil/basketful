import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
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
import Contact from './routes/Contact/index'
import NotFound from './routes/ErrorPages/NotFound.jsx'
import Store from './routes/Store/index'
import ThanksPurhcase from './routes/ErrorPages/ThanksPurchase'

import { useUser } from './auth/UserContext'

import { Spinner } from '@chakra-ui/react'

const ScrollToTop = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return children
}



const App = () => {
  const { user, status } = useUser()

  const authRoute = (element, redirectTo) => {
    if (status === "fetching") {
      return <Spinner />
    } else if (status === "loggedOut") {
      return element
    } else {
      return <Navigate to="/" />
    }
  }

  const protectRoute = (element, redirectTo) => {
    if (status === "fetching") {
      return <Spinner />
    } else if (status === "loggedIn") {
      return element
    } else {
      return <Navigate to="/login" />
    }
  }

  return (
    <Router forceRefresh={true}>
      <Layout status={status} user={user}>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/login" element={authRoute(<Login />)} />
            <Route exact path="/register" element={authRoute(<Register />)} />
            <Route exact path="/register/address" element={<Address user={user} />} />
            <Route exact path="/register/payment" element={<Payment />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/profile" element={protectRoute(<Profile />)} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store/:id" element={<Store />} />
            <Route path="/successful-purchase" element={<ThanksPurhcase />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
      </Layout>
    </Router>
  )
}

export default App
