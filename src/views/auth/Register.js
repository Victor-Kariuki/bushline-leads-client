import React, { Component } from 'react';

import { AuthLayout } from '../../layouts';
import { RegisterForm } from '../../components';

class Register extends Component
{
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <AuthLayout>
        <RegisterForm/>
      </AuthLayout>
    )
  }
}

export default Register;
