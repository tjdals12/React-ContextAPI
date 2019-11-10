import React from 'react';
import classNames from 'classnames/bind';
import styles from './TodoInput.scss';

const cx = classNames.bind(styles);

function TodoInput(): JSX.Element {
    return (
        <form className={cx('TodoInput')}>
            <input placeholder="할 일을 입력하세요." className={cx('input')} />
            <button type="submit" className={cx('button')}>
                등록
            </button>
        </form>
    );
}

export default TodoInput;
