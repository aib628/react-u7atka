import React from 'react';
import 'antd/dist/antd.css';
import { Table, Divider, Card, Button } from 'antd';
import { Transfer } from 'antd';
import { Form, Input, Select } from 'antd';

const columns = [
  {
    title: '角色编码',
    dataIndex: 'code',
    key: 'code',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '角色名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '权限列表',
    dataIndex: 'list',
    key: 'list',
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>编辑</a>
      </span>
    ),
  },
];

const data = [
  {
    code: 'source_master',
    name: '数据源管理员',
    list: 'create、reload',
  },
  {
    code: 'system_master',
    name: '系统管理员',
    list: 'create、delete',
  },
  {
    code: 'project_master',
    name: '项目管理员',
    list: 'create、modify、execute、view',
  },
  {
    code: 'project_maintainer',
    name: '项目开发',
    list: 'modify、execute、view',
  },
  {
    code: 'project_developer',
    name: '项目运维',
    list: 'modify、view',
  },
  {
    code: 'project_view',
    name: '项目成员',
    list: 'view',
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

const oriTargetKeys = mockData
  .filter((item) => +item.key % 3 > 1)
  .map((item) => item.key);

class App extends React.Component {
  state = {
    targetKeys: oriTargetKeys,
    selectedKeys: [],
    disabled: false,
  };

  handleChange = (nextTargetKeys, direction, moveKeys) => {
    this.setState({ targetKeys: nextTargetKeys });
  };

  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({
      selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys],
    });
  };

  render() {
    const { targetKeys, selectedKeys } = this.state;
    return (
      <div>
        <Transfer
          dataSource={mockData}
          titles={['可选权限列表', '已选权限列表']}
          targetKeys={targetKeys}
          selectedKeys={selectedKeys}
          onChange={this.handleChange}
          onSelectChange={this.handleSelectChange}
          onScroll={this.handleScroll}
          render={(item) => item.title}
          locale={{ itemsUnit: '项' }}
        />
      </div>
    );
  }
}

/**---------------------------弹出层End------------------------------ */

export default () => {
  return (
    <div>
      <Card
        title="角色管理"
        extra={
          <Button style={{ width: '100%' }} type="primary">
            ＋ 新增角色
          </Button>
        }
      >
        <Table columns={columns} dataSource={data} pagination={false} />
      </Card>

      <Card
        title="编辑角色 数据源管理员(source_master)"
        extra={
          <Button style={{ width: '100%' }} type="primary">
            保存
          </Button>
        }
      >
        <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
          <Form.Item
            label="角色名称"
            validateStatus="error"
            help="角色名称已存在"
          >
            {<Input />}
          </Form.Item>
          <Form.Item label="角色编码">
            {<Input value="source_master" disabled="true" />}
          </Form.Item>
          <Form.Item label="权限列表">
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

      <Card
        title="新增角色 数据源管理员(source_master)"
        extra={
          <Button style={{ width: '100%' }} type="primary">
            保存
          </Button>
        }
      >
        <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
          <Form.Item
            label="角色名称"
            validateStatus="error"
            help="角色名称已存在"
          >
            {<Input />}
          </Form.Item>
          <Form.Item
            label="角色编码"
            validateStatus="error"
            help="角色编码已存在，角色编码不合法"
          >
            {<Input />}
          </Form.Item>
        </Form>
        <App />
      </Card>
    </div>
  );
};
