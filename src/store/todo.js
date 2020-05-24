import { atom } from 'recoil';

// persistence_UNSTABLE for logging
// https://github.com/polemius/recoil-logger

export const todos = atom({
  key: 'todos',
  default: [],
  persistence_UNSTABLE: {
    type: 'log',
  },
});

export const inProgress = atom({
  key: 'inProgress',
  default: [],
  persistence_UNSTABLE: {
    type: 'log',
  },
});

export const done = atom({
  key: 'done',
  default: [],
  persistence_UNSTABLE: {
    type: 'log',
  },
});
