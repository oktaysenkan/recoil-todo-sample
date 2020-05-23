import { atom } from 'recoil';

export const todos = atom({
  key: 'textState',
  default: '',
});
