import React from 'react';
import classNames from 'classnames/bind';
import TodoItem from 'components/TodoItem';
import styles from './TodoList.scss';

const cx = classNames.bind(styles);

type Todo = {
    id: number;
    text: string;
    done: boolean;
};

type TodoListProps = {
    todos: Todo[];
};

function TodoList({ todos }: TodoListProps): JSX.Element {
    return (
        <ul className={cx('TodoList')}>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}

export default TodoList;
