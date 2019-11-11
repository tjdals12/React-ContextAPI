import { TodosState, Action } from './types';

export default function todosReducer(state: TodosState, action: Action): TodosState {
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
