import React from 'react';
import TodoInput from 'components/TodoInput';
import TodoList from 'components/TodoList';
import TodosContextProvier from 'contexts/TodosContext';

const App: React.FC = () => {
    return (
        <TodosContextProvier>
            <TodoInput />
            <TodoList />
        </TodosContextProvier>
    );
};

export default App;
