import { Dispatch } from 'react';

export type Todo = {
    id: number;
    text: string;
    done: boolean;
};

export type TodosState = Todo[];

export type Action =
    | { type: 'ADD_TODO'; text: string }
    | { type: 'TOGGLE_TODO'; id: number }
    | { type: 'REMOVE_TODO'; id: number };

export type TodosDispatch = Dispatch<Action>;
