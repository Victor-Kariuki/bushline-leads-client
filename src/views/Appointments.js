import React, { Component } from 'react';
import { Calendar, PageHeader, Button } from 'antd';

import { DashboardLayout } from '../layouts';

class Appointments extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      selectedValue: '',
    }
  }

  onSelect = value => {
    this.setState({
      value,
      selectedValue: value,
    });
  };

  onPanelChange = value => {
    this.setState({ value });
  };

  render() {
    return (
      <DashboardLayout>
          <PageHeader ghost={false} onBack={() => window.history.back()} title="Appointments"
            subTitle="View and manage appointments with your leads"
            extra={[
              <Button key="2">Operation</Button>,
              <Button key="1" type="primary">
                Create A New Appointment
              </Button>,
            ]}
          >
          </PageHeader>

        <Calendar value={this.value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
      </DashboardLayout>
    )
  }
}

export default Appointments;
