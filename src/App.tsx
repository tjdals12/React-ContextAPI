import React from 'react';
import TodoInput from 'components/TodoInput';
import TodoList from 'components/TodoList';
import TodosContextProvier from 'contexts/Todos/TodosContext';

const App: React.FC = () => {
    return (
        <TodosContextProvier>
            <TodoInput />
            <TodoList />
        </TodosContextProvier>
    );
};

export default App;
