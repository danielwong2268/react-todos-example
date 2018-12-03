import * as React from 'react';
import { Todo } from './types';

interface TodoProps extends Todo {
  index: number;
}


const TodoElement = ({ text, completed } : TodoProps) => (
  <li>
    {text}
  </li>
);

export default TodoElement;