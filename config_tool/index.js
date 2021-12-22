import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

export default () => {
  return (
    <div>
      <Select
        showSearch
        style={{ width: '300px' }}
        placeholder="输入或选择属性进行配置"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="5">type</Option>
        <Option value="6">parallelism</Option>

        <Option value="1">state.backend</Option>
        <Option value="2">state.checkpoints.dir</Option>
        <Option value="3">execution.checkpointing.interval</Option>
        <Option value="4">
          execution.checkpointing.externalized-checkpoint-retention
        </Option>
      </Select>
    </div>
  );
};
