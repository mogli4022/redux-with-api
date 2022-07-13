import React, { useContext, useEffect, createContext } from 'react';
import Cart from './components/cart';
import Product from './components/product';
import Total from './components/total';
import Home from './components/home';

import {Route, Routes, Link} from 'react-router-dom'
import Error from './components/error ';
import Navbar from './components/navbar';
import apidata from './apidata/api';
import axios from 'axios'

function App() {
// useEffect(() => {
//   axios.get("https://fakestoreapi.com/products")
//     .then(response => {
//           console.log(response.data);
//     })
//     .catch(e => {
//         console.log(e);

//     })
// })
  
  return (
    <>
      <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/total' element={<Total/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
