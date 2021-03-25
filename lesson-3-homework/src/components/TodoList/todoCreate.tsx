import React from 'react';
import {observer} from "mobx-react";
import { Form, Input, Icon, Button } from 'antd';

import TodoStore from '../../store/todoStore';
import DetailCreate from '../TodoDetail/todoDetailCreate';

// const {  Form, Input, Button, Raidio} = antd;

// interface TodoCreateProps extends FormComponentProps {
//     title: string
// }

// class TodoCreate extends Component<TodoCreateProps, any> {

// }
@observer
class TodoCreate extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: '',
    };
  
  }
  
  handleChange = (event: any) => {
    this.setState({value: event.target.value});
  }
  
  handleSubmit = (event: any) => {
    event.preventDefault();
    TodoStore.quickCreateTodo(this.state.value);
    this.setState({
      value: ''
    })
  }

  handleDetailCreate = () => {
    TodoStore.showDetailCreate = true;
  }

  render() {
    const formItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 4,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
      <>
      <Form layout="inline" 
            onSubmit={this.handleSubmit} 
            style={{width: '100%', marginBottom: '15px'}}  
            {...formItemLayout}>
        <Form.Item style={{width: '50%'}}>
          <Input 
            type="text" 
            prefix={<Icon type="plus" style={{ color: 'rgba(0, 0, 0, .25'}} />}
            placeholder="输入新的代办事项..." 
            value={this.state.value} 
            onChange={this.handleChange}
            style={{width: '100%'}}
            required
            />

        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            快速创建
          </Button>
        </Form.Item>
        <Form.Item>
          <Button onClick={this.handleDetailCreate}>
            编辑更多
          </Button>
        </Form.Item>
      </Form>
      <DetailCreate />
      </>
    );
  } 
}

  export default TodoCreate;