import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route,useNavigate, Link } from 'react-router-dom'
import Category from './components/Category.component';
import Login from './components/login.component'
import SignUp from './components/signup.component'
import Nav from './components/nav.component';
import Product from './components/Product.component';
import Subcat from './components/Subcat.component';
import ProductPage from './components/product_page.component';
import Home from './components/Home.component';
import Setbanner from './components/setbanner.component';
import Forgetpassword from './components/forgetpassword.component';
import AddToCart from './components/addToCart';
import Payment from './components/payment.component';
import Orders from './components/orders.component';
import AllOrder from './components/allOrder.component';



function App() {

  return (
    <Router>
      
      <div className="App">
        <Nav />
        <div style={{textAlign:'left',marginTop:'20px'}}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/admin/category" element={<Category />} />
              <Route path="/admin/subcategory" element={<Subcat />} />
              <Route path="/admin/product" element={<Product />} />
              <Route path="/admin/setbanner" element={<Setbanner />} />
              <Route path="/menu" element={<ProductPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/addtocart" element={<AddToCart />} />
              <Route path="/forgetpassword" element={<Forgetpassword/>} />
              <Route path="/payment" element={<Payment/>} />
              <Route path="/orders" element={<Orders/>} />
              <Route path="/admin/allorders" element={<AllOrder/>} />
              
            </Routes>
          </div>
        </div>
     
    </Router>
  )
}

export default App
