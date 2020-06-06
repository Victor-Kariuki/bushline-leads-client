import React, { Component } from 'react';
import { Form, Input, Select, Button, Row, Col } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

class AssetsForm extends Component
{
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Form name="Proerty Form">

        <Form.Item name="lr-number">
          <Input placeholder="LR Number" />
        </Form.Item>

        <Row gutter={[8, 16]}>
          <Col>
            <Form.Item name="latitude">
              <Input placeholder="Latitude" />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item name="longitude">
              <Input placeholder="Property name"/>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item name="description">
          <TextArea placeholder="Description" />
        </Form.Item>

        <Form.Item name="Size" >
          <Select defaultValue="eighth">
            <Option value="eighth">Eighth</Option>
            <Option value="quarter">Quarter</Option>
            <Option value="half">Half</Option>
            <Option value="acre">Acre</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit"> Submit</Button>
        </Form.Item>
      </Form>
    )
  }
}

export default AssetsForm;
