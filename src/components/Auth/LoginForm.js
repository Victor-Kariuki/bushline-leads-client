import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class LoginForm extends Component
{

  render() {
    return (
      <Form name="login" className="auth-form" initialValues={{ remember: true, }}>
        <h1 className="title">Login</h1>

        <Form.Item name="username" >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            type="email"
            placeholder="Email" />
        </Form.Item>

        <Form.Item name="password">
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a href="/forgot">Forgot password</a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="auth-form-button"> Log In </Button>
          Or <a href="/register">register now!</a>
        </Form.Item>
      </Form>
    )
  }
}

export default LoginForm;
