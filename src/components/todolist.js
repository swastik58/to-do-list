import React from 'react';

//import components
import Todo from './todo';

const Todolist = ({ todos, setTodos, filteredTodos }) =>
{
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo setTodos={setTodos} todo={todo} todos={todos} text={todo.text} key={todo.id}/>
                ))}
            </ul>
        </div>
    );
};

export default Todolist;