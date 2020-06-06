import React, { Component } from 'react';
import { PageHeader, Button } from 'antd';

import { DashboardLayout } from '../../layouts';

class Asset extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      routes: [
        {
          path: 'index',
          breadcrumbName: 'Dashboard',
        }, {
          path: 'first',
          breadcrumbName: 'Assets'
        }, {
          path: 'second',
          breadcrumbName: 'AssetName'
        }
      ]
    }
  }

  render() {
    return (
      <DashboardLayout>
          <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title="Asset"
            subTitle="Manage this particular assets"
            breadcrumb={ this.state.routes }
            extra={[
              <Button key="3">Export</Button>,
              <Button key="2" type="danger">Delete</Button>,
              <Button key="1" type="primary">
                Update
              </Button>,
            ]}>
          </PageHeader>
      </DashboardLayout>
    )
  }
}

export default Asset;
