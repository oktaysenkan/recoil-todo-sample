import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import {
  todos as todosStore,
  inProgress as inProgressStore,
  done as doneStore,
} from './store/todo';

import List from './components/List';

import './App.css';

const App = () => {
  const [todoName, setTodoName] = useState('');

  const [todos, setTodos] = useRecoilState(todosStore);
  const [inProgress, setInProgress] = useRecoilState(inProgressStore);
  const [done, setDone] = useRecoilState(doneStore);

  const handleTodoNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleAddTodo = () => {
    setTodos(
      todos.concat({
        name: todoName,
        status: 'todo',
      })
    );
  };

  const handleAddInProgress = () => {
    setInProgress(
      inProgress.concat({
        name: todoName,
        status: 'todo',
      })
    );
  };

  const handleAddDone = () => {
    setDone(
      done.concat({
        name: todoName,
        status: 'done',
      })
    );
  };

  return (
    <div className="app">
      <div>
        <input type="text" onChange={handleTodoNameChange} />
        <button onClick={handleAddTodo}>Add</button>
        <List data={todos} />
      </div>

      <div>
        <input type="text" onChange={handleTodoNameChange} />
        <button onClick={handleAddInProgress}>Add</button>
        <List data={inProgress} />
      </div>

      <div>
        <input type="text" onChange={handleTodoNameChange} />
        <button onClick={handleAddDone}>Add</button>
        <List data={done} />
      </div>
    </div>
  );
};

export default App;
