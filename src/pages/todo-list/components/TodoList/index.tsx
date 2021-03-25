import React, { Component } from 'react';
import { observer } from "mobx-react";
import { List, Row } from 'antd';


import TodoItem from "./todoItem";
import TodoCreate from './todoCreate';
import TodoStore from '../../store/todoStore';

import TodoDetail from '../TodoDetail'

@observer
class TodoList extends Component<any, {
    detailVisible: boolean,
}> {
    
    constructor(props: any) {
        super(props);
        this.state = {
            detailVisible: true,
        }
    }

    componentDidMount() {
        TodoStore.initialTodoList();
    }

    render() {

        return (
            <>
            <Row style={{width: '100%'}}>
            <TodoCreate />
            <List 
                itemLayout="horizontal"
                dataSource={TodoStore.showTodoList}
                rowKey="id"
                renderItem= {item => (
                    <TodoItem key={item.id}
                        todo={item}/>
                    )} 
                />
            {/* Task Left: {TodoStore.unfinishedTodoCount}  */}
            </Row>
            <TodoDetail />
            </>
        )

    }

}

export default TodoList;