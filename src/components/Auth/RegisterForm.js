import React, { Component } from 'react';

import { Form, Input, Button, Row, Col, Typography } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, LockOutlined } from '@ant-design/icons';

const { Title } = Typography;

class RegisterForm extends Component
{

  render() {
    return (
      <Form name="register" className="auth-form" >
        <Title>Register</Title>
        <hr/>
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item  name="firstName">
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="First Name" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="lastName">
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Last Name" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item name="phoneNumber">
          <Input
            prefix={<PhoneOutlined className="site-form-item-icon" />}
            type="number"
            placeholder="Phone Number" />
        </Form.Item>

        <Form.Item name="email">
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            type="email"
            placeholder="Email" />
        </Form.Item>

        <Row gutter={8}>
          <Col span={12}>
            <Form.Item name="password">
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="confirmPassword">
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="auth-form-button"> Register </Button> &nbsp;
          Or <a href="/login">Login</a>
        </Form.Item>
      </Form>
    )
  }
}

export default RegisterForm;
