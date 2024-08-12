import './App.css';

import {
  DASHBOARD_URL,
  PRODUCTS_URL,
  CATEGORIES_URL,
  CUSTOMERS_URL,
  CUSTOMER_DETAIL_URL
} from './constant';

import React from "react";
import Dashboard from './Pages/Dashboard';
import Products from './Pages/Products';
import Customers from './Pages/Customers';
import Categories from './Pages/Categories';
import CustomerDetail from './Pages/CustomerDetail';

import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={DASHBOARD_URL} element={<Dashboard />} />
        <Route path={CUSTOMERS_URL} element={<Customers />} />
        <Route path={CUSTOMER_DETAIL_URL} element={<CustomerDetail />} />
        <Route path={PRODUCTS_URL} element={<Products />} />
        <Route path={CATEGORIES_URL} element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

