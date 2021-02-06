
export interface ThisTodoItem {
    readonly id? : number;
    title: string;
    content: string;
    status: number;
    expire_date: string;
    create_date: string;
}

export const TodoStatus = {
    UNDONE: 0,
    DONE: 1,
    EXPIRED: 2,
}