import './App.css';
import React, { useEffect, useState } from "react";
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard';
import Products from './Pages/Products';
import Customers from './Pages/Customers';
import Categories from './Pages/Categories';


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
    <div>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar sidebarTab={sidebarTab} setSidebar={setSidebar} />
        <div style={{ width: "100%", height: "90vh" }}>
          {currentComponent}
        </div>
      </div>
    </div>
  );
}

export default App;
