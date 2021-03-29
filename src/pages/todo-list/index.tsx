import React, { Component } from 'react';
import {observer} from "mobx-react";

import TodoCategory from './components/TodoCategory/TodoCategory';
import TodoList from './components/TodoList';
import 'antd/dist/antd.css';
import './index.css';
import { Layout } from 'antd';

const { Header, Content, Sider } = Layout;

@observer
class TodoApp extends Component<any, any> {

  render() {
    return (
      <Layout>
        <Header className="layout-header">
          简易待办事项
          {/* <Clock /> */}
        </Header>

        <Layout className="layout-content">
          <Sider width={200} style={{ background: '#ffffff' }}>
            <TodoCategory />
          </Sider>
          <Layout style={{ padding: '16px 24px 24px' }}>

            <Content
              style={{
                background: '#ffffff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <TodoList />
            </Content>
          </Layout>
        </Layout>

      </Layout>
    );
  }
}



export default TodoApp;
