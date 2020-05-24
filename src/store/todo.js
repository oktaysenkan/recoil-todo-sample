import { atom } from 'recoil';

export const todos = atom({
  key: 'todos',
  default: [],
});

export const inProgress = atom({
  key: 'inProgress',
  default: [],
});

export const done = atom({
  key: 'done',
  default: [],
});
