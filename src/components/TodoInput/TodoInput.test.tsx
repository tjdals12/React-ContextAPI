import React from 'react';
import { render } from '@testing-library/react';
import TodosContextProvider from 'contexts/Todos/TodosContext';
import TodoInput from './TodoInput';

describe('<TodoInput />', () => {
    it('matches snapshot', () => {
        const utils = render(
            <TodosContextProvider>
                <TodoInput />
            </TodosContextProvider>
        );
        expect(utils.container).toMatchSnapshot();
    });

    it('has a input and a button', () => {
        const utils = render(
            <TodosContextProvider>
                <TodoInput />
            </TodosContextProvider>
        );
        expect(utils.container.querySelector('.button')).not.toBeNull();
        expect(utils.container.querySelector('.input')).not.toBeNull();
    });
});
