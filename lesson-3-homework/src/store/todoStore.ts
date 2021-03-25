import {observable, action, computed} from "mobx";
import { ThisTodoItem } from '../constant/Interface';
import { remove } from 'lodash';

class TodoStore {
    @observable todoList: ThisTodoItem[] = [];
    @observable showType: string = 'all';
    @observable showDetailCreate: boolean = false;
    @observable showDetailTodo: boolean = false;
    @observable todoSelect: ThisTodoItem = {
        id: -1, 
        title: "Initial", 
        status: 0, 
        content: "one step222", 
        expire_date: "2021-01-15 17:16:56",
        create_date: "2021/1/12 上午6:27:42",
    };

    totalLength: number = 0;

    @computed get showTodoList(): ThisTodoItem[] {
        if (this.showType === 'all') return this.todoList;
        if (this.showType === 'undone') return this.todoList.filter(todo => todo.status === 0);
        if (this.showType === 'done') return this.todoList.filter(todo => todo.status === 1);

        return this.todoList;
    }

    @computed get unfinishedTodoCount() {
        return this.todoList.filter(todo => todo.status === 0).length
    }

    @action quickCreateTodo = (title: string): void => {
        let currentTodoList = [...this.todoList];
        let now = new Date();
        let format = formatNextDay(new Date(now.getTime() + 24 * 60 * 3600));
        let thisDay = now.toLocaleDateString();
        let newID = this.totalLength;
        let newTodo: ThisTodoItem = {
            id: newID,
            title: title,
            content: '无详细内容',
            status: 0,
            expire_date: format,
            create_date: thisDay
        }
        currentTodoList.push(newTodo)
        this.todoList = currentTodoList;
        this.totalLength += 1;

    }

    @action detailCreateTodo = (todo: ThisTodoItem): void => {
        let currentTodoList = [...this.todoList];
        
        let newID = this.totalLength;
        let newTodo: ThisTodoItem = {
            id: newID,
            title: todo.title,
            content: todo.content,
            status: 0,
            expire_date: todo.expire_date,
            create_date: todo.create_date,
        }
        currentTodoList.push(newTodo)
        this.todoList = currentTodoList;
        this.totalLength += 1;
    }

    @action deleteOneTodo = (todo: ThisTodoItem): void => {
        let idx = this.todoList.indexOf(todo);
        this.todoList = remove(this.todoList, (item, index) => {
            return index === idx ? null : item;
        }) 
        this.totalLength -= 1;
    }

    @action editDetailTodo = (todo: ThisTodoItem): void => {
        let idx = this.todoList.indexOf(this.todoSelect);
        let currentTodoList = [...this.todoList];
        currentTodoList.splice(idx, 1, todo);
        this.todoList = currentTodoList;
    }


    @action initialTodoList = (): void => {
        // console.log('initialTodoList');
        let todos = [ 
            { 
                id: 0, 
                title: "完成基本的框架", 
                status: 1, 
                content: "one step", 
                expire_date: "2021-01-12 13:16:56",
                create_date: "2021/1/12 上午6:27:42",
            }, 
            {
                id: 1, 
                title: "逻辑", 
                status: 1, 
                content: "step two", 
                expire_date: "2021-01-13 16:16:56",
                create_date: "2021/1/12 上午6:27:42",

            }, 
            {
                id: 2, 
                title: "数据存储", 
                status: 1, 
                content: "Store", 
                expire_date: "2021-01-14 16:16:56",
                create_date: "2021/1/12 上午6:27:42",

            }, 
            {
                id: 3, 
                title: "完善界面", 
                status: 0, 
                content: "antd", 
                expire_date: "2021-01-15 10:16:56",
                create_date: "2021/1/12 上午6:27:42",

            }, 
            {
                id: 4, 
                title: "增加优先级", 
                status: 0, 
                content: "priority", 
                expire_date: "2021-01-15 17:16:56",
                create_date: "2021/1/12 上午6:27:42",

            }, 
        ];
        this.todoList = todos;
        this.totalLength = todos.length;
        // console.log('in todo store', this.todoList)
    }

}

const formatNextDay = ( date: Date ) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}
const formatNumber = ( n: any) => {
    n = n.toString();
    return n[1] ? n : '0' + n;
};

const todoStore = new TodoStore();

export default todoStore;