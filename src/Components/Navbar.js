import { Layout } from 'antd';
import UserMenu from './User/UserMenu';

const { Header} = Layout;



function Navbar() {
  return (
      <Header
        style={{
          backgroundColor: "#F2F2F2",
          display: 'flex',
          alignItems: 'center',
          height: 60
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%"
          }}>
          <img src='/project_x_logo.png' style={{width: 40}}/>
          <UserMenu />
        </div>
        
      </Header>
  );
}

export default Navbar;
