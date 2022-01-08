import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs } from 'antd';

import Demo from './demo/index.js';
import FridaySDK from './friday_sdk/index.js';
import SourceTab from './source_tab/index.js';
import ConfigTool from './config_tool/index.js';
import RoleList from './role_list/index.js';
import PermissionList from './permission_list/index.js';
import FunctionList from './function_list/index.js';
import UserGrants from './user_grants/index.js';
import UserProjectGrants from './user_project_grants/index.js';

const { TabPane } = Tabs;

ReactDOM.render(
  <Tabs type="line" defaultActiveKey="friday_sdk">
    <TabPane tab="Demo页面" key="demo">
      <Demo />
    </TabPane>
    <TabPane tab="FridaySDK页面" key="friday_sdk">
      <FridaySDK />
    </TabPane>
    <TabPane tab="数据源页面" key="source">
      <SourceTab />
    </TabPane>
    <TabPane tab="属性配置页面" key="config">
      <ConfigTool />
    </TabPane>
    <TabPane tab="角色列表页面" key="role">
      <RoleList />
    </TabPane>
    <TabPane tab="权限列表页面" key="permission">
      <PermissionList />
    </TabPane>
    <TabPane tab="功能列表页面" key="function">
      <FunctionList />
    </TabPane>
    <TabPane tab="用户权限页面" key="grants">
      <UserGrants />
    </TabPane>
    <TabPane tab="项目权限页面" key="project_grants">
      <UserProjectGrants />
    </TabPane>
  </Tabs>,
  document.getElementById('container')
);
