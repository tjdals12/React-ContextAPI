import React from 'react';
import classNames from 'classnames/bind';
import { Todo } from 'contexts/Todos/types';
import { useTodosDispatch } from 'contexts/Todos/TodosContext';
import styles from './TodoItem.scss';

const cx = classNames.bind(styles);

type TodoItemProps = {
    todo: Todo;
};

function TodoItem({ todo }: TodoItemProps): JSX.Element {
    const dispatch = useTodosDispatch();

    return (
        <li className={cx(`TodoItem ${todo.done ? 'done' : ''}`)}>
            <span className={cx('text')} onClick={(): void => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}>
                {todo.text}
            </span>
            <span className={cx('remove')} onClick={(): void => dispatch({ type: 'REMOVE_TODO', id: todo.id })}>
                (X)
            </span>
        </li>
    );
}

export default React.memo(TodoItem);
