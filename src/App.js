import React from 'react';
import { useRecoilState } from 'recoil';

import { todos } from './store/todo';

import './App.css';

const App = () => {
  const [text, setText] = useRecoilState(todos);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={onChange} />
      <div>{text}</div>
    </div>
  );
};

export default App;
