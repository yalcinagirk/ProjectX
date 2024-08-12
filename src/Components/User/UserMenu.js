import { Dropdown } from 'antd';
import { UserOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';


const items = [
  { label: 'Profile', key: 'profile', icon: <UserOutlined /> },
  { label: 'Billing', key: 'billing', icon: <SettingOutlined /> },
  { label: 'Settings', key: 'settings', icon: <SettingOutlined /> },
  { label: 'Logout', key: 'logout', icon: <LogoutOutlined />, danger: true}
]

function UserMenu() {
  const menuProps = {
    items,
    onClick: () => {},
  };
  return (
    <div style={{display: "flex", alignItems: "center"}}>
      <Dropdown.Button menu={menuProps} placement="bottom" icon={<UserOutlined />}>
        CABBAR
      </Dropdown.Button>
    </div>
  );
}

export default UserMenu;
