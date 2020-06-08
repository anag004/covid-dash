import React from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import { HomeOutlined, ContactsOutlined, ExperimentOutlined } from '@ant-design/icons';
import HomePage from "./HomePage";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      collapsible={true}
      defaultCollapsed={true}
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<HomeOutlined size="large"/>}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<ExperimentOutlined />}>
          Model details
        </Menu.Item>
        <Menu.Item key="3" icon={<ContactsOutlined />}>
          Contact us
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <HomePage></HomePage>
      <Footer style={{ textAlign: 'center' }}>Created by Ananye Agarwal | Utkarsh Tyagi</Footer>
    </Layout>
  </Layout>
  );
}

export default App;
