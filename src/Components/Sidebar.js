import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import {
    DASHBOARD_URL,
    PRODUCTS_URL,
    CATEGORIES_URL,
    CUSTOMERS_URL
} from '../constant';

const { Sider } = Layout;

const sidebar_items = [
    { key: "dashboard", label: <Link to={DASHBOARD_URL}>Dashboard</Link> },
    { key: "products", label: <Link to={PRODUCTS_URL}>Products</Link> },
    { key: "customers", label: <Link to={CUSTOMERS_URL}>Customers</Link> },
    { key: "categories", label: <Link to={CATEGORIES_URL}>Categories</Link> },
]


function Sidebar({ sidebarTab }) {
    return (
        <Sider
            width={200}
        >
            <Menu
                selectedKeys={[sidebarTab]}
                onSelect={(e) => { }}
                mode="inline"
                items={sidebar_items}
                style={{ backgroundColor: "#fff", height: "100vh" }}
            />
        </Sider>
    );
}

export default Sidebar;
