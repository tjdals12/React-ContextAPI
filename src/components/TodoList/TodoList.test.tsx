import React from 'react';
import { render } from '@testing-library/react';
import TodoList from 'components/TodoList';

describe('<TodoList />', () => {
    it('matches snapshot', () => {
        const utils = render(<TodoList todos={[]} />);
        expect(utils.container).toMatchSnapshot();
    });
});
