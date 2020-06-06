import React, { Component } from 'react';
import { PageHeader, Button } from 'antd';

import { DashboardLayout } from '../../layouts';
import { AssetsTable } from '../../components'

class AssetsList extends Component
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
          title="Assets"
          subTitle="Manage all your assets"
          breadcrumb={ this.state.routes }
          extra={[
            <Button key="2">Export</Button>,
            <Button key="1" type="primary">
              Add A New Assets
            </Button>,
          ]}>
        </PageHeader>

        <AssetsTable/>
      </DashboardLayout>
    )
  }
}

export default AssetsList;
