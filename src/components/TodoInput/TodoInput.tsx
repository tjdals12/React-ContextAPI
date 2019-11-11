import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { useTodosDispatch } from 'contexts/Todos/TodosContext';
import styles from './TodoInput.scss';

const cx = classNames.bind(styles);

function TodoInput(): JSX.Element {
    const [value, setValue] = useState('');
    const dispatch = useTodosDispatch();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', text: value });
        setValue('');
    };

    return (
        <form className={cx('TodoInput')} onSubmit={onSubmit}>
            <input
                placeholder="할 일을 입력하세요."
                className={cx('input')}
                value={value}
                onChange={(e): void => setValue(e.target.value)}
            />
            <button className={cx('button')} type="submit">
                등록
            </button>
        </form>
    );
}

export default TodoInput;
