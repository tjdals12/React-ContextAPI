import React from 'react';
import { render } from '@testing-library/react';
import TodoItem from './TodoItem';

describe('<TodoItem />', () => {
    it('matches snapshot', () => {
        const utils = render(<TodoItem todo={{ id: 0, text: 'Something', done: false }} />);
        expect(utils.container).toMatchSnapshot();
    });

    it('has a text and a remove button', () => {
        const utils = render(<TodoItem todo={{ id: 0, text: 'Something', done: false }} />);
        expect(utils.container.querySelector('.text')).not.toBeNull();
        expect(utils.container.querySelector('.remove')).not.toBeNull();
    });
});
