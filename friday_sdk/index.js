import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

import AgentClient from '../friday_sdk/sdk.js';
import AgentClient2 from '../friday_sdk/sdk2.js';

function report1() {
  AgentClient.trackEvent('page_view', {
    url: 'http://xxx.cvte.com/index.html',
    title: 'XXX首页',
  });

  console.info('report1====================');
}

function report2() {
  AgentClient2.trackEvent('page_view', {
    url: 'http://xxx.cvte.com/index.html',
    title: 'XXX首页',
  });

  console.info('report2====================');
}

export default () => {
  return (
    <div>
      <Button type="primary" onClick={this.report1}>
        report1
      </Button>
      <Button type="primary" onClick={this.report2}>
        report2
      </Button>
    </div>
  );
};
