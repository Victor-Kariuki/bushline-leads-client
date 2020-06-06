import React, { Component } from 'react';
import { Table, Tag, Space, Button } from 'antd';


class AssetsTable extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      columns: [{
        title: 'LR Number',
        dataIndex: 'lr-number',
      }, {
        title: 'Latitude',
        dataIndex: 'latitude',
      }, {
        title: 'Longitude',
        dataIndex: 'longitude',
      }, {
        title: 'Size',
        dataIndex: 'size',
      }, {
        title: 'Status',
        dataIndex: 'status',
        render: status => {
          if (status === 'available') {
            return (
              <Tag color='green' key={status}>
                {status.toUpperCase()}
              </Tag>
            )
          } else if (status === 'booked') {
            return (
              <Tag color='geekblue' key={status}>
                {status.toUpperCase()}
              </Tag>
            )
          } else {
            return (
              <Tag color='volcano' key={status}>
                {status.toUpperCase()}
              </Tag>
            )
          }
        },
      }, {
        title: 'Actions',
        dataIndex: '',
        key: 'actions',
        render:() => {
          return(
            <Space size="middle">
            <Button type="danger">Delete</Button>&nbsp;
            <Button type="primary">Update</Button>
            </Space>
          )
        },
      }]
    }
  }

  render() {
    return (
      <Table columns={ this.state.columns } dataSource={ this.props.assets } />
    )
  }
}

export default AssetsTable;
