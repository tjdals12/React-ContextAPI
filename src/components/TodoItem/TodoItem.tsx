import React from 'react';
import classNames from 'classnames/bind';
import styles from './TodoItem.scss';

const cx = classNames.bind(styles);

type TodoItemProps = {
    todo: { id: number; text: string; done: boolean };
};

function TodoItem({ todo }: TodoItemProps): JSX.Element {
    return (
        <li className={cx(`TodoItem ${todo.done ? 'done' : ''}`)}>
            <span className={cx('text')}>{todo.text}</span>
            <span className={cx('remove')}>(X)</span>
        </li>
    );
}

export default TodoItem;
