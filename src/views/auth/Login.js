import React, { Component } from 'react';

import { AuthLayout } from '../../layouts';
import { LoginForm } from '../../components';

class Login extends Component
{
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <AuthLayout>
        <LoginForm/>
      </AuthLayout>
    )
  }
}

export default Login;
