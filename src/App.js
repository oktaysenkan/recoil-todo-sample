import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { uuid } from 'uuidv4';

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
    const todo = {
      name,
      id: uuid(),
      status: type,
    };

    if (type === 'todo') {
      setTodos(todos.concat(todo));
      return;
    }

    if (type === 'inprogress') {
      setInProgress(inProgress.concat(todo));
      return;
    }

    if (type === 'done') {
      setDone(done.concat(todo));
      return;
    }
  };

  const removeTodo = (type, id) => {
    if (type === 'todo') {
      setTodos(todos.filter((item) => item.id !== id));
      return;
    }

    if (type === 'inprogress') {
      setInProgress(inProgress.filter((item) => item.id !== id));
      return;
    }

    if (type === 'done') {
      setDone(done.filter((item) => item.id !== id));
      return;
    }
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

    const todoID = e.dataTransfer.getData('id');
    const todoStatus = e.dataTransfer.getData('status');

    if (!todoName || !todoStatus) {
      return;
    }

    if (todoStatus === type) {
      return;
    }

    removeTodo(todoStatus, todoID);
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
