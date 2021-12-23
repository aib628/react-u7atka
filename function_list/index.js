import React from 'react';
import 'antd/dist/antd.css';
import { Table, Divider, Card, Button } from 'antd';
import { Transfer } from 'antd';
import { Form, Input, Select } from 'antd';

const columns = [
  {
    title: '功能编码',
    dataIndex: 'code',
    key: 'code',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '功能名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '角色列表',
    dataIndex: 'roles',
    key: 'roles',
  },
  {
    title: '权限列表',
    dataIndex: 'permissions',
    key: 'permissions',
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>绑定权限</a>
      </span>
    ),
  },
];

const data = [
  {
    code: 'source_master',
    name: '数据源管理员',
    roles: 'master,viewer',
    permissions: 'create、reload',
  },
  {
    code: 'system_master',
    name: '系统管理员',
    permissions: 'create、delete',
  },
  {
    code: 'project_master',
    name: '项目管理员',
    permissions: 'create、modify、execute、view',
  },
  {
    code: 'project_maintainer',
    name: '项目开发',
    permissions: 'modify、execute、view',
  },
  {
    code: 'project_developer',
    name: '项目运维',
    permissions: 'modify、view',
  },
  {
    code: 'project_view',
    name: '项目成员',
    permissions: 'view',
  },
];

/**---------------------------弹出层Begin------------------------------ */
const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `权限${i + 1}`,
    description: `权限名称＋权限编码${i + 1}`,
    disabled: i % 3 < 1,
  });
}
/**---------------------------弹出层End------------------------------ */

export default () => {
  return (
    <div>
      <Card title="功能权限管理">
        <Table columns={columns} dataSource={data} pagination={false} />
      </Card>

      <Card
        title="绑定功能权限　功能名称（功能编码）"
        extra={
          <Button style={{ width: '100%' }} type="primary">
            保存
          </Button>
        }
      >
        <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
          <Form.Item label="功能角色">
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="Please select"
              defaultValue={['角色1']}
            >
              {data.map((item) => (
                <Option key={item.name}>{item.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="功能权限">
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="Please select"
              defaultValue={['权限2']}
            >
              {mockData.map((item) => (
                <Option key={item.title}>{item.title}</Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
