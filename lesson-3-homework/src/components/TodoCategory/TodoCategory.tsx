import React from "react";
import {Menu, Icon } from "antd"
import TodoStore from '../../store/todoStore';


interface MenuClick {
  key: string,
}

const TodoCategory: React.FC = () => {
  
    let handleClick = (e: MenuClick) => {
      TodoStore.showType = e.key
    }
    return (
      <>
      <Menu
        mode="inline"
        defaultSelectedKeys={['all']}
        style={{ 
          height: '100%', 
          borderRight: 0,
          paddingTop: '10%'}}
        onClick={handleClick}
        >
        <Menu.Item key="all">
          <Icon type="flag" />
          <span> 全部事项</span>
          
        </Menu.Item>
        <Menu.Item key="undone">
          <Icon type="folder-open" />
          <span> 未完成</span>
        
        </Menu.Item>

        <Menu.Item key="done">
          <Icon type="folder" />
          <span> 已完成</span>
        </Menu.Item>
      </Menu>
      </>
    )
}

export default TodoCategory;