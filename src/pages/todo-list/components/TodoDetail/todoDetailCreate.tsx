import React from 'react';
import {observer} from "mobx-react";
import { ThisTodoItem } from '../../constant/Interface';
import FormComponentProps  from 'antd/lib/form';
import moment from 'moment'
import TodoStore from '../../store/todoStore';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { Icon } from '@antd-design/icons'

// const { Option } = Select;

@observer
class CreateDetail extends React.Component<FormComponentProps, any> {
    constructor(props: any) {
        super(props);

        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    onClose = () => {
        TodoStore.showDetailCreate = false;

    }
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
              return;
            }
            let now = new Date();

            // Should format date value before submit.
            const values = {
              ...fieldsValue,
              'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
            };
            let newTodo: ThisTodoItem = {
                title: values.formTitle,
                content: values.description,
                status: 0,
                expire_date: values['date-time-picker'],
                create_date: now.toLocaleDateString(),
            }
            TodoStore.detailCreateTodo(newTodo)
            this.onClose(); 
          });
    }
    
    render() {
        const { getFieldDecorator } = this.props.form;

        return (
                <div>
                  <Drawer
                    title="创建新的Todo"
                    width={500}
                    onClose={this.onClose}
                    visible={TodoStore.showDetailCreate}
                    bodyStyle={{ paddingBottom: 80 }}
                  >
                    <Form layout="vertical" onSubmit={this.handleSubmit} >
                      <Row gutter={16}>
                        <Col span={17}>
                          <Form.Item label="标题">
                            {getFieldDecorator('formTitle', {
                              rules: [{ required: true, message: '标题不可为空' }],
                            })(
                            <Input 
                                placeholder="请输入标题" 
                                suffix={
                                  <Icon type="edit" style={{ color: 'rgba(0,0,0,.2)'}}/> 
                              }
                                />
                            )} 
                          </Form.Item>
                        </Col>

                      </Row>

                      <Row gutter={16}>
                        <Col span={17}>
                          <Form.Item label="到期时间">
                            {getFieldDecorator('date-time-picker', {
                              initialValue: moment("2021-1-14 13:16:00")
                            //   rules: [{ required: true, message: 'Please choose the dateTime' }],
                            })(
                              <DatePicker
                                showTime format="YYYY-MM-DD HH:mm:ss"
                                style={{ width: '100%' }}
                              />,
                            )} 
                          </Form.Item>
                        </Col>
                      </Row>

                      <Row gutter={16}>
                        <Col span={24}>
                          <Form.Item label="详细内容">
                            {getFieldDecorator('description', {
                              initialValue: "详细内容",

                            })(
                            <Input.TextArea 
                                rows={4} 
                                placeholder="请输入详细内容" 
                                />
                            )} 
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form>
                    <div
                      style={{
                        position: 'absolute',
                        right: 0,
                        bottom: 0,
                        width: '100%',
                        borderTop: '1px solid #e9e9e9',
                        padding: '10px 16px',
                        background: '#fff',
                        textAlign: 'right',
                      }}
                    >
                      <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                        取消
                      </Button>
                      <Button onClick={this.handleSubmit} type="primary" htmlType="submit">
                        提交
                      </Button>
                    </div>
                  </Drawer>
                </div>

        )
    }


}

// const WrappedTodoDetailCreate = Form.create({name: 'todo_create'})(DetailCreate);

export default Form.create({name: 'todo_create'})(CreateDetail);