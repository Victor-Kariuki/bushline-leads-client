import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import {
  DashboardOutlined,
  UserOutlined,
  AppstoreAddOutlined,
  HomeOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

class Navbar extends Component
{
  render() {
    return (
      <Menu
        mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <SubMenu key="sub1" title={  <span> <DashboardOutlined /> <span>Admin</span> </span> }>
          <Menu.Item key="/dashboard"><Link to="/dashboard">Dashboard</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/users">Users </Link></Menu.Item>
        </SubMenu>

        <Menu.Item key="/properties"> <AppstoreAddOutlined/> <Link to="/properties">Properties</Link></Menu.Item>

        <SubMenu key="sub2" title={ <span> <UserOutlined/> <span>Clients</span> </span> }>
          <Menu.Item key="/customers"><Link to="/customers">Customers</Link></Menu.Item>
          <Menu.Item key="/leads"><Link to="/leads">Leads</Link></Menu.Item>
          <Menu.Item key="/inquires"><Link to="/inquiries">Inquiries</Link></Menu.Item>
        </SubMenu>

        <SubMenu key="sub3" title={ <span> <HomeOutlined/> <span>General</span> </span> }>
          <Menu.Item key="/appointments"><Link to="/appointments">Appointments</Link></Menu.Item>
          <Menu.Item key="/notes"><Link to="/notes">Notes</Link></Menu.Item>
          <Menu.Item key="/tasks"><Link to="/tasks">Tasks</Link></Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}

export default Navbar;
