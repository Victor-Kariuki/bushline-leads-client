import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';

import { Navbar } from '../components';

const { Header, Content, Footer } = Layout;

class AuthLayout extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().getFullYear(),
    };
  }

  render() {
    return (
      <Layout>
        <Header>
          <div className="logo">Bushline leads</div>
          <Navbar/>
        </Header>
        <Content className="site-layout-background">
          <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}></Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>{this.props.children}</Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Bushline Leads ©{this.state.year} Created by Kisokolab</Footer>
      </Layout>
    )
  }
}

export default AuthLayout;
