import React from 'react';

import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { useParams } from 'react-router-dom';

function CustomerDetail() {
  const { customer_id } = useParams()
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar sidebarTab="customers"/>
        <div>
          Customer Detail: {customer_id}
        </div>
      </div>
    </div>
  );
}

export default CustomerDetail;
