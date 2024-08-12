import React from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';

function Categories() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar sidebarTab="categories"/>
        <div style={{ width: "100%", height: "90vh" }}>
          Categories
        </div>
      </div>
    </div>
  );
}

export default Categories;
