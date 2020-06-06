import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import {
  PhoneOutlined,
  CalendarOutlined,
  TeamOutlined,
  IdcardOutlined,
  AppstoreAddOutlined,
  FileDoneOutlined,
} from '@ant-design/icons';

class Navbar extends Component
{
  render() {
    return (
      <Menu
        mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} theme="dark"
        style={{ height: '100%' }}
      >
        <Menu.Item key="/leads"><Link to="/leads"><PhoneOutlined/> Leads</Link></Menu.Item>
        <Menu.Item key="/customers"><Link to="/customers"><TeamOutlined/> Customers</Link></Menu.Item>
        <Menu.Item key="/staff"><Link to="/staff"><IdcardOutlined/> Staff</Link></Menu.Item>
        <Menu.Item key="/assets"><Link to="/assets"><AppstoreAddOutlined/> Assets</Link></Menu.Item>
        <Menu.Item key="/appointments"><Link to="/appointments"><CalendarOutlined/> Appointments</Link></Menu.Item>
        <Menu.Item key="/reports"><Link to="/reports"><FileDoneOutlined/> Reports</Link></Menu.Item>
      </Menu>
    )
  }
}

export default Navbar;
