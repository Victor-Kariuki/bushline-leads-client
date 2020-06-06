import React, { Component } from 'react';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';


import { Sidebar } from '../components';

const { Header, Sider, Content, Footer } = Layout;

class DashboardLayout extends Component
{

  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      collapsed: false,
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">Bushline Leads</div>
          <Sidebar/>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff' }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content className="hero">
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Bushline Leads ©{this.state.year} Created by Kisokolab</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default DashboardLayout;
