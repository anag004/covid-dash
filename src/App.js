import React from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import { HomeOutlined, ContactsOutlined, ExperimentOutlined } from '@ant-design/icons';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./HomePage";
import Details from "./Details";
import Contact from "./Contact";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <Router basename="/covid-dash">
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
              <Menu.Item key="1" component={Link} icon={<HomeOutlined size="large"/>}>
                <Link style={{ all: "inherit" }} to="/">
                  Home
                </Link>
              </Menu.Item>
            
              <Menu.Item key="2" icon={<ExperimentOutlined />}>
                <Link style={{ all: "inherit" }} to="/details">
                  Model details
                </Link>
              </Menu.Item>
            
              <Menu.Item key="3" icon={<ContactsOutlined />}>
                <Link style={{ all: "inherit" }} to="/contact">
                  Contact us
                </Link>
              </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route path="/details">
              <Details/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
          </Switch>
          <Footer style={{ textAlign: 'center' }}>
            Created by Ananye Agarwal | Utkarsh Tyagi <br/>
            <small>
              <a target="_blank" href="https://icons8.com/icons/set/coronavirus">
                Coronavirus icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
            </small>
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
