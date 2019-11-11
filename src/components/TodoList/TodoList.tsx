import React from 'react';
import classNames from 'classnames/bind';
import TodoItem from 'components/TodoItem';
import { useTodosState } from 'contexts/Todos/TodosContext';
import styles from './TodoList.scss';

const cx = classNames.bind(styles);

function TodoList(): JSX.Element {
    const todos = useTodosState();

    return (
        <ul className={cx('TodoList')}>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}

export default TodoList;
