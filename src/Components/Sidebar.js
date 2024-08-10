import { Layout, Menu } from 'antd';

const { Sider } = Layout;

const sidebar_items = [
    { key: "dashboard", label: "Dashboard" },
    { key: "products", label: "Products" },
    { key: "customers", label: "Customers" },
    { key: "categories", label: "Categories" },
]


function Sidebar({sidebarTab, setSidebar}) {
    return (
        <Sider
            width={200}
        >
            <Menu
                selectedKeys={[sidebarTab]}
                onSelect={(e) => {setSidebar(e.key)}}
                mode="inline"
                items={sidebar_items}
                style={{ backgroundColor: "#fff", height: "100vh" }}
            />
        </Sider>
    );
}

export default Sidebar;
