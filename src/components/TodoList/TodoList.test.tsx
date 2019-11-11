import React from 'react';
import { render } from '@testing-library/react';
import TodoList from 'components/TodoList';
import TodosContextProvider from 'contexts/Todos/TodosContext';

describe('<TodoList />', () => {
    it('matches snapshot', () => {
        const utils = render(
            <TodosContextProvider>
                <TodoList />
            </TodosContextProvider>
        );
        expect(utils.container).toMatchSnapshot();
    });
});
