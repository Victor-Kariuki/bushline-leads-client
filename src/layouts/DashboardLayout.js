import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';

import { Navbar, Sidebar } from '../components';

const { Header, Sider, Content, Footer } = Layout;

class DashboardLayout extends Component
{

  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
    }
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header>
          <div className="logo">Bushline Leads</div>
          <Navbar/>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Sidebar/>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content className="site-layout-background">
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>Bushline Leads ©{this.state.year} Created by Kisokolab</Footer>
      </Layout>
    )
  }
}

export default DashboardLayout;
