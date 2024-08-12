import React from 'react';
import { Link } from "react-router-dom";
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid


import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { CUSTOMERS_URL } from '../constant';

const customer_detail_cell_renderer = ({data}) => {
  const to =  CUSTOMERS_URL + data.id

  return <Link to={to} >{data.make}</Link>
}

function Customers() {
  var rowData = [
    { id: 1, make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { id: 2, make: "Ford", model: "F-Series", price: 33850, electric: false },
    { id: 3, make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]
  const colDefs = [
    { field: "make", cellRenderer: customer_detail_cell_renderer},
    { field: "model" },
    { field: "price" },
    { field: "electric"}
  ]
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar sidebarTab="dashboard"/>
        <div style={{ width: "100%", height: "90vh" }}>
          < div
            className = "ag-theme-quartz" // applying the Data Grid theme
            style = {{ height: 500 }} // the Data Grid will fill the size of the parent container
          >
            <AgGridReact
              rowData={rowData}
              columnDefs={colDefs}
            />
          </div >
        </div>
      </div>
    </div>
  );
}

export default Customers;
