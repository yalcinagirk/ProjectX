import React from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';

function Products() {
  return (

    <div>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar sidebarTab="products" />
        <div>
          Products
        </div>
      </div>
    </div>
  );
}

export default Products;
