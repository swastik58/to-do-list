import './App.css';
import React, { useState, useEffect } from 'react';

//import components

import Form from './components/form';
import Todolist from './components/todolist';
import Name from './components/form1';

function App() {

  //state stuff
  const [inputName, setInputName] = useState('');
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //use effect
  useEffect(() => {
    const filterHandler = () => {
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      };
    };
    filterHandler();
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>{inputName}'s TO-DO LIST</h1>
      </header>
      <Name setInputName={setInputName}/>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus}/>
      <Todolist filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
};

export default App;