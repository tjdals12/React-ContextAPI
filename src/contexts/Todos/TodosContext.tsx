import React, { createContext, useReducer, useContext } from 'react';
import { TodosState, TodosDispatch } from './types';
import todosReducer from './reducer';

const TodosStateContext = createContext<TodosState | undefined>(undefined);
const TodosDispatchContext = createContext<TodosDispatch | undefined>(undefined);

export function useTodosState(): TodosState {
    const state = useContext(TodosStateContext);
    if (!state) throw new Error('Provider not found!');
    return state;
}

export function useTodosDispatch(): TodosDispatch {
    const dispatch = useContext(TodosDispatchContext);
    if (!dispatch) throw new Error('Provider not found!');
    return dispatch;
}

export default function TodosContextProvider({ children }: { children: React.ReactNode }): JSX.Element {
    const [todos, dispatch] = useReducer(todosReducer, [
        {
            id: 0,
            text: 'Something 1',
            done: true,
        },
        {
            id: 1,
            text: 'Something 2',
            done: true,
        },
        {
            id: 2,
            text: 'Something 3',
            done: false,
        },
    ]);

    return (
        <TodosDispatchContext.Provider value={dispatch}>
            <TodosStateContext.Provider value={todos}>{children}</TodosStateContext.Provider>
        </TodosDispatchContext.Provider>
    );
}
