import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs } from 'antd';

import Demo from './demo/index.js';
import SourceTab from './source_tab/index.js';
import ConfigTool from './config_tool/index.js';

const { TabPane } = Tabs;

ReactDOM.render(
  <Tabs type="line">
    <TabPane tab="Demo页面" key="demo">
      <Demo />
    </TabPane>
    <TabPane tab="数据源页面" key="source">
      <SourceTab />
    </TabPane>
    <TabPane tab="属性配置页面" key="config">
      <ConfigTool />
    </TabPane>
  </Tabs>,
  document.getElementById('container')
);
