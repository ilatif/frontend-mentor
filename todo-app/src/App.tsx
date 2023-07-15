import { useState } from 'react';

import Header from './Header';
import AddTodo from './AddTodo';
import Todos from './Todos';

import './App.css';

interface Todo {
  state: 'active'|'completed',
  text: string,
  key: number,
}

function App() {
  const [theme, setTheme] = useState('light');
  const [todos, setTodos] = useState([
    {
      state: 'completed',
      text: 'Complete online JavaScript course',
      key: 1
    },
    {
      state: 'active',
      text: 'Jog around the park 3x',
      key: 2
    },
    {
      state: 'active',
      text: '10 minutes meditation',
      key: 3
    },
    {
      state: 'active',
      text: 'Read for 1 hour',
      key: 4
    },
    {
      state: 'active',
      text: 'Pick up groceries',
      key: 5
    },
    {
      state: 'active',
      text: 'Complete Todo App on Frontend Mentor',
      key: 6
    }
  ]);
  const [key, setKey] = useState(todos.length + 1);

  function updateTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  function addTodo(value: string) {
    if (value) {
      setKey(key + 1);
      setTodos([...todos, { state: 'active', text: value, key }]);
    }
  }

  function updateTodo(key: number, checked: boolean) {
    const index = todos.findIndex((todo) => todo.key === key);
    if (index !== -1) {
      const _todos = todos.slice();
      _todos[index] = Object.assign({}, todos[index], { state: checked ? 'completed' : 'active' }) as Todo;
      setTodos(_todos);
    }
  }

  function deleteTodo(key: number) {
    setTodos(todos.filter((todo) => todo.key !== key));
  }

  function clearCompleted() {
    setTodos(todos.filter((todo) => todo.state !== 'completed'));
  }

  return (
    <>
      <div className={`container ${theme}`}>
        <Header theme={theme} updateTheme={updateTheme} />
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} updateTodo={updateTodo}  deleteTodo={deleteTodo} clearCompleted={clearCompleted} />
      </div>
    </>
  )
}

export default App
