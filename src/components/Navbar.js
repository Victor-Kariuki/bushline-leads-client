import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from "react-router-dom";

class Navbar extends Component
{
  render() {
    return (
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['/']}>
        <Menu.Item key="/"><Link to="/">Login</Link></Menu.Item>
        <Menu.Item key="/register"><Link to="/register">Register</Link></Menu.Item>
      </Menu>
    )
  }
}

export default Navbar;
