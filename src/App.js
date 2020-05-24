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

  const handleAddTodo = (name = todoName, type) => {
    if (type === 'todo') {
      setTodos(
        todos.concat({
          name,
          status: type,
        })
      );
      return;
    }

    if (type === 'inprogress') {
      setInProgress(
        inProgress.concat({
          name,
          status: type,
        })
      );
      return;
    }

    if (type === 'done') {
      setDone(
        done.concat({
          name,
          status: type,
        })
      );
      return;
    }
  };

  const removeTodo = (name) => {
    setTodos(todos.filter((item) => item.name !== name));
    setInProgress(inProgress.filter((item) => item.name !== name));
    setDone(done.filter((item) => item.name !== name));
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e, type) => {
    e.preventDefault();
    e.stopPropagation();

    const todoName = e.dataTransfer.getData('name');

    if (!todoName) {
      return;
    }

    removeTodo(todoName);
    handleAddTodo(todoName, type);
  };

  return (
    <div className="app">
      <div
        className="todo"
        onDrop={(e) => handleDrop(e, 'todo')}
        onDragOver={(e) => handleDragOver(e)}
        onDragEnter={(e) => handleDragEnter(e)}
        onDragLeave={(e) => handleDragLeave(e)}
      >
        <input type="text" onChange={handleTodoNameChange} />
        <button onClick={() => handleAddTodo(todoName, 'todo')}>Add</button>
        <List data={todos} />
      </div>

      <div
        className="in-progress"
        onDrop={(e) => handleDrop(e, 'inprogress')}
        onDragOver={(e) => handleDragOver(e)}
        onDragEnter={(e) => handleDragEnter(e)}
        onDragLeave={(e) => handleDragLeave(e)}
      >
        <input type="text" onChange={handleTodoNameChange} />
        <button onClick={() => handleAddTodo(todoName, 'inprogress')}>
          Add
        </button>
        <List data={inProgress} />
      </div>

      <div
        className="done"
        onDrop={(e) => handleDrop(e, 'done')}
        onDragOver={(e) => handleDragOver(e)}
        onDragEnter={(e) => handleDragEnter(e)}
        onDragLeave={(e) => handleDragLeave(e)}
      >
        <input type="text" onChange={handleTodoNameChange} />
        <button onClick={() => handleAddTodo(todoName, 'done')}>Add</button>
        <List data={done} />
      </div>
    </div>
  );
};

export default App;
