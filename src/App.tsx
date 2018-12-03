import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import { Todo } from './types';
import TodoElement from './TodoElement';

interface AppState {
  inputText: string;
  todos: Todo[];
}

class App extends React.Component<{}, AppState> {
  state = {
    inputText: '',
    todos: []
  };

  updateInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    this.setState({
      inputText: value
    });
  };

  onSubmit = () => {
    const newTodo: Todo = {
      text: this.state.inputText,
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
      inputText: ''
    });
  };

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt='logo' />
          <h1 className="App-title">Welcome to my Todo App:</h1>
        </header>
        {
          this.state.todos.map((todo, i) => (
            <TodoElement key={i} {...todo} index={i} />
          ))
        }
        <input
          value={this.state.inputText}
          onChange={this.updateInputText}
        />
        <button onClick={this.onSubmit}>
          add todo
        </button>
      </div>
    );
  }
}

export default App;
