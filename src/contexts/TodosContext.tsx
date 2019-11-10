import React, { createContext, Dispatch, useReducer, useContext } from 'react';

export type Todo = {
    id: number;
    text: string;
    done: boolean;
};

type TodosState = Todo[];

const TodosStateContext = createContext<TodosState | undefined>(undefined);

type Action =
    | { type: 'ADD_TODO'; text: string }
    | { type: 'TOGGLE_TODO'; id: number }
    | { type: 'REMOVE_TODO'; id: number };

type TodosDispatch = Dispatch<Action>;

const TodosDispatchContext = createContext<TodosDispatch | undefined>(undefined);

function todosReducer(state: TodosState, action: Action): TodosState {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat({
                id: Math.max(...state.map(todo => todo.id)) + 1,
                text: action.text,
                done: false,
            });
        case 'TOGGLE_TODO':
            return state.map(todo => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error('Unhandled action');
    }
}

export default function TodosContextProvier({ children }: { children: React.ReactNode }): JSX.Element {
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
