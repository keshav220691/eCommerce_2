import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Customer/Pages/HomePage/HomePage'
import Cart from '../Customer/Components/Cart/Cart'
import Navigation from '../Customer/Components/Navigations/Navigation'
import Footer from '../Customer/Components/Footer/Footer'
import Product from '../Customer/Components/Product/Product'
import ProductDetails from '../Customer/Components/ProductDetails/ProductDetails'
import Checkout from '../Customer/Components/Checkout/Checkout'
import order from '../Customer/Components/Order/Order'
import Order from '../Customer/Components/Order/Order'
import OrderDetails from '../Customer/Components/Order/OrderDetails'


function CustomerRoutes() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelOne/:levelTwo/:levelThree/" element={<Product />} />
        <Route path="/product/:productId/" element={<ProductDetails />} />
        <Route path="/cart/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default CustomerRoutes