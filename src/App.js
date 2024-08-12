import './App.css';

import {
  DASHBOARD_URL,
  PRODUCTS_URL,
  CATEGORIES_URL,
  CUSTOMERS_URL
} from './constant';

import React, { useEffect, useState } from "react";
import Dashboard from './Pages/Dashboard';
import Products from './Pages/Products';
import Customers from './Pages/Customers';
import Categories from './Pages/Categories';

import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";



const get_content = (sidebar_tab) => {
  switch (sidebar_tab) {
    case "dashboard":
      return <Dashboard />
    case "products":
      return <Products />
    case "customers":
      return <Customers />
    case "categories":
      return <Categories />
    default:
      return <Dashboard />
  }
}

function App() {
  const [sidebarTab, setSidebar] = useState("dashboard")
  const [currentComponent, setCurrentComponent] = useState(<Dashboard />)

  useEffect(() => {
    setCurrentComponent(get_content(sidebarTab))
  }, [sidebarTab])



  return (
    <BrowserRouter>
      <Routes>
        <Route path={DASHBOARD_URL} element={<Dashboard />} />
        <Route path={CUSTOMERS_URL} element={<Customers />} />
        <Route path={PRODUCTS_URL} element={<Products />} />
        <Route path={CATEGORIES_URL} element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
{/* <div>
  <Navbar />
  <div style={{ display: "flex", flexDirection: "row" }}>
    <Sidebar sidebarTab={sidebarTab} setSidebar={setSidebar} />
    <div style={{ width: "100%", height: "90vh" }}>
      {currentComponent}
    </div>
  </div>
</div> */}
