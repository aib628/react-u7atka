import React from 'react';
import 'antd/dist/antd.css';
import { Table, Divider, Card, Button } from 'antd';

const columns = [
  {
    title: '仅限编码',
    dataIndex: 'code',
    key: 'code',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '权限名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>编辑</a>
        <Divider type="vertical" />
        <a>删除</a>
      </span>
    ),
  },
];

const data = [
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
    code: 'reload',
    name: '刷新',
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

export default () => {
  return (
    <Card
      title="权限管理"
      extra={
        <Button style={{ width: '100%' }} type="primary">
          ＋ 新增权限
        </Button>
      }
    >
      <Table columns={columns} dataSource={data} pagination={false} />
    </Card>
  );
};
