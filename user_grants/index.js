import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { Table, Card, Button } from 'antd';
import { TreeSelect, Select, Form } from 'antd';

const { TabPane } = Tabs;

const columns = [
  {
    title: '用户名称',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '账号',
    dataIndex: 'account',
    key: 'account',
  },
  {
    title: '项目权限列表',
    dataIndex: 'projects',
    key: 'projects',
  },
  {
    title: '功能权限列表',
    dataIndex: 'permissions',
    key: 'permissions',
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>详情</a>
      </span>
    ),
  },
];

const data = [
  {
    name: '张三',
    account: 'zhangsan',
    projects: 'aa,bb,cc....',
    permissions: 'create、reload',
    description: 'aa,bb,cc',
  },
  {
    name: '李四',
    account: 'lisi',
    projects: 'aa,bb,cc....',
    permissions: 'create、view',
  },
];

/**---------------------------弹出层Begin------------------------------ */
const permissionLists = [
  {
    code: 'create',
    name: '新增',
  },
  {
    code: 'view',
    name: '查看',
  },
  {
    code: 'modify',
    name: '编辑',
  },
  {
    code: 'delete',
    name: '删除',
  },
  {
    code: 'launch',
    name: '上线',
  },
  {
    code: 'execute',
    name: '执行',
  },
];

const notebooks = [
  {
    title: 'Notebook:崩溃指标',
    value: '2GP97ERDS',
    key: '2GP97ERDS',
    children: permissionLists.map((item) => ({
      title: item.name,
      value: item.code,
      key: item.code,
    })),
  },
  {
    title: 'Notebook:使用率',
    value: '3GP97ERDS',
    key: '4GP97ERDS',
  },
  {
    title: 'Notebook:开机数',
    value: '5GP96ERDS',
    key: '5GP96ERDS',
  },
];

const treeData = [
  {
    title: '项目名：录播（seewo_lubo）',
    value: 'seewo_lubo',
    key: 'seewo_lubo',
    children: [
      {
        title: 'Notebook:崩溃指标',
        value: '2GP97ERDS',
        key: '2GP97ERDS',
        children: permissionLists.map((item) => ({
          title: item.name,
          value: item.code,
          key: item.code,
        })),
      },
      {
        title: 'Notebook:登录指标',
        value: '2GP96ERDS',
        key: '2GP96ERDS',
      },
    ],
  },
  {
    title: '项目名：多媒体（seewo_media）',
    value: 'seewo_media',
    key: 'seewo_media',
    children: [
      {
        title: 'Notebook:使用率',
        value: '3GP97ERDS',
        key: '4GP97ERDS',
      },
      {
        title: 'Notebook:开机数',
        value: '5GP96ERDS',
        key: '5GP96ERDS',
      },
    ],
  },
];

const projects = [];
for (let i = 10; i < 36; i++) {
  projects.push(<Option key={i.toString(36) + i}>{'项目' + i}</Option>);
}

const roles = [];
for (let i = 10; i < 36; i++) {
  roles.push(<Option key={i.toString(36) + i}>{'角色' + i}</Option>);
}

const permissions = [];
for (let i = 10; i < 36; i++) {
  permissions.push(<Option key={i.toString(36) + i}>{'权限' + i}</Option>);
}

const functions = [];
for (let i = 10; i < 36; i++) {
  functions.push(<Option key={i.toString(36) + i}>{'功能模块' + i}</Option>);
}
/**---------------------------弹出层End------------------------------ */

export default () => {
  return (
    <div>
      <Card title="用户权限管理">
        <Table
          columns={columns}
          dataSource={data}
          expandedRowRender={(record) => (
            <p style={{ margin: 0 }}>{record.description}</p>
          )}
        />
      </Card>

      <Card
        title="编辑用户权限 张三(zhangsan)"
        extra={
          <Button style={{ width: '100%' }} type="primary">
            编辑或保存
          </Button>
        }
      >
        <Tabs type="line" defaultActiveKey="grants">
          <TabPane tab="项目权限管理" key="project">
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
              <Form.Item label="项目列表">
                <Select
                  mode="single"
                  style={{ width: '100%' }}
                  placeholder="Please select"
                  defaultValue={['a10', 'c12']}
                >
                  {projects}
                </Select>
              </Form.Item>
              <Form.Item label="项目角色">
                <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="Please select"
                  defaultValue={['a10', 'c12']}
                >
                  {roles}
                </Select>
              </Form.Item>
              <Form.Item label="Notebook权限">
                <TreeSelect
                  treeDefaultExpandAll
                  treeData={notebooks}
                  treeCheckable="true"
                  showCheckedStrategy="SHOW_PARENT"
                  style={{ width: '100%' }}
                />
              </Form.Item>
            </Form>
          </TabPane>

          <TabPane
            tab="项目列表点击成员管理Modal弹出层"
            key="project_permission"
          >
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
              <Form.Item label="分配角色">
                <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="Please select"
                  defaultValue={['a10', 'c12']}
                >
                  {roles}
                </Select>
              </Form.Item>
              <Form.Item label="Notebook权限">
                <TreeSelect
                  treeDefaultExpandAll
                  treeData={notebooks}
                  treeCheckable="true"
                  showCheckedStrategy="SHOW_PARENT"
                  style={{ width: '100%' }}
                />
              </Form.Item>
            </Form>
          </TabPane>

          <TabPane tab="功能权限管理" key="permission">
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
              <Form.Item label="功能名称">
                <Select
                  mode="single"
                  style={{ width: '100%' }}
                  placeholder="Please select"
                  defaultValue={['a10', 'c12']}
                >
                  {functions}
                </Select>
              </Form.Item>
              <Form.Item label="分配角色">
                <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="Please select"
                  defaultValue={['a10', 'c12']}
                >
                  {roles}
                </Select>
              </Form.Item>
              <Form.Item label="分配权限">
                <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="Please select"
                  defaultValue={['a10', 'c12']}
                >
                  {permissions}
                </Select>
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};
