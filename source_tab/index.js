import React from 'react';
import { Tabs, Select, Button, Icon, Divider } from 'antd';

import 'antd/dist/antd.css';
import './index.css';
import './card_list.css';

const { TabPane } = Tabs;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onFocus() {
  console.log('focus');
}

function onBlur() {
  console.log('blur');
}

function onSearch(val) {
  console.log('search:', val);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

const children = [];
for (let i = 1; i < 10; i++) {
  children.push(<Option key={i.toString(36) + i}>{'字段名称' + i}</Option>);
}

let index = 0;
class App extends React.Component {
  state = {
    items: [
      'jdbc:mysql://master-6-mysql-master-3503.op2.hz.paas.cvtecs.com:3503/flink_ui',
      'jdbc:mysql://master-7-mysql-master-3503.op2.hz.paas.cvtecs.com:3503/flink_ui',
    ],
  };

  addItem = () => {
    console.log('addItem');
    const { items } = this.state;
    this.setState({
      items: [...items, `添加的新连接 ${index++}`],
    });
  };

  render = () => {
    const { items } = this.state;
    return (
      <Select
        style={{ width: 650 }}
        placeholder="选择或输入JDBC连接"
        dropdownRender={(menu) => (
          <div>
            {menu}
            <Divider style={{ margin: '4px 0' }} />
            <div
              style={{ padding: '4px 8px', cursor: 'pointer' }}
              onMouseDown={(e) => e.preventDefault()}
              onClick={this.addItem}
            >
              {/* <Icon type="plus" /> 添加新连接 */}
              添加新连接
            </div>
          </div>
        )}
      >
        {items.map((item) => (
          <Option key={item}>{item}</Option>
        ))}
      </Select>
    );
  };
}

export default () => {
  return (
    <div className="card-container">
      <Tabs type="card">
        <TabPane tab="业务DB数据同步" key="1">
          <Select
            showSearch
            style={{ width: 650 }}
            placeholder="输入数据库连接或数据库名或表名 过滤选择业务表"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">
              master_5_mysql_ap_3333_op2_hz_paas_cvtecs_com_3333.seewo_ucp_core.t_device
            </Option>
            <Option value="lucy">
              master_6_mysql_ap_3333_op2_hz_paas_cvtecs_com_3333.seewo_ucp_core.t_device2
            </Option>
            <Option value="tom">
              master_7_mysql_ap_3333_op2_hz_paas_cvtecs_com_3333.seewo_ucp_core.t_device3
            </Option>
          </Select>
          &nbsp;
          <Button type="primary">确定</Button>
          <br />
          <br />
          <Select
            mode="tags"
            style={{ width: '100%' }}
            placeholder="选择数据库字段名称"
            onChange={handleChange}
          >
            {children}
          </Select>
        </TabPane>

        <TabPane tab="Friday日志上报" key="2">
          <Select
            showSearch
            style={{ width: '650px' }}
            placeholder="选择一个KafkaTopic"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">event-other-pro</Option>
            <Option value="lucy">event-care-pro</Option>
            <Option value="tom">event-picbook-pro</Option>
          </Select>
          &nbsp;
          <Button type="primary">确定</Button>
          <br />
          <br />
          <Select
            mode="tags"
            style={{ width: '100%' }}
            placeholder="选择属性字段名"
            onChange={handleChange}
          >
            {children}
          </Select>
        </TabPane>

        <TabPane tab="输入数据库连接" key="3">
          <App />　 &nbsp;&nbsp;
          <Button type="primary">确定</Button>
          <br />
          <br />
          <Select
            mode="tags"
            style={{ width: '200px' }}
            placeholder="选择表名"
            onChange={handleChange}
          >
            {children}
          </Select>
          <Select
            mode="tags"
            style={{ width: '400px' }}
            placeholder="选择列名"
            onChange={handleChange}
          >
            {children}
          </Select>
        </TabPane>
      </Tabs>
    </div>
  );
};
