import React from 'react';
import { Link } from 'react-router';

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import { Table, Icon } from 'antd';
import { Pagination } from 'antd';
import Axios from '../../utils/axios.util';

import Interviewq from './interviewq';

class jobList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div className="m-qanda-list">
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="面试题" key="1">
            <Interviewq uri="api/interviewq/list" detailuri="interviewq/detail/"></Interviewq>
          </TabPane>
          <TabPane tab="招聘信息" key="2">
            <Interviewq uri="api/job/list" detailuri="job/detail/"></Interviewq>
          </TabPane>
        </Tabs>
      </div>
    )
  }

  callback(key){
    console.log(key);
  }

  componentDidMount() {

  }
}

export default jobList
