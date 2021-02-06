import React, { Component } from 'react';
import {observer} from "mobx-react";
import { List, Input } from 'antd';
import { ThisTodoItem } from '../../constant/Interface';

import TodoStore from '../../store/todoStore';

interface myPropsType {
    todo: ThisTodoItem
}

@observer
class TodoItem extends Component<myPropsType, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            todo: props.todo
        }

    }
    handleClickEdit = (event: any, todo: ThisTodoItem) => {
        TodoStore.showDetailTodo = true;
        TodoStore.todoSelect = todo;
        console.log(' show more', todo)
    }
    clickOneTodo = (event: any, todo: ThisTodoItem) => {
        TodoStore.deleteOneTodo(todo)
    }

    render() {
        return (
            <List.Item 
                actions={[
                    <a  
                        key="list-delete"                     
                        onClick={(e) => {this.clickOneTodo(e, this.props.todo)}}
                        > 
                        删除 
                    </a>, 
                    <a 
                        key="list-edit"
                        onClick={(e) => {this.handleClickEdit(e, this.props.todo)}}
                        >
                        编辑
                    </a>
                ]}
            >                 
                <Input
                    type="checkbox"
                    style={{width: '15px', height: '15px', marginRight: '20px' }}
                    checked={this.props.todo.status === 1}
                    onClick={() => (
                                    this.props.todo.status = 1 - this.props.todo.status)}
                
                />
                <List.Item.Meta 
                    title={<a>{this.props.todo.title}</a>}
                    description={this.props.todo.expire_date} /> 

                {/* <div 
                    style={{color: 'rgba(0,0,0,.3)'}}
                    onClick={(e) => {this.handleClickMore(e, this.props.todo)}}
                    > 显示更多 
                </div> */}
            </List.Item>
        )
    }
}

export default TodoItem;