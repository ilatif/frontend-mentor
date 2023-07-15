import { useState } from 'react';

import './Todos.css';

interface TodosProps {
  todos: { state: string, text: string, key: number }[],
  updateTodo: (key: number, checked: boolean) => void
  deleteTodo: (key: number) => void
  clearCompleted: () => void
}

function Todos(props: TodosProps) {
  const [filter, setFilter] = useState('all');

  const todos = props.todos.filter(todo => {
      if (filter === 'active')  {
        return todo.state === filter;
      }

      if (filter === 'completed') {
        return todo.state === filter;
      }

      return true;
    }).map((todo) => {
    return (
      <div className="todo" key={todo.key}>
        <input type="checkbox" checked={todo.state === 'completed' ? true: false} value="1" name="todo-status" className="todo-circle" onChange={(e) => {
          props.updateTodo(todo.key, e.target.checked);
        }} />
        <p className={`todo-text ${todo.state === 'completed' ? 'todo-text-checked' : ''}`}>{todo.text}</p>
        <img src="./images/icon-cross.svg" className="todo-cross" onClick={(_) => {
          props.deleteTodo(todo.key);
        }} />
      </div>
    )
  });

  const activeCount = props.todos.filter((todo) => todo.state !== 'completed').length;

  return <>
    <div className="todos-container">
      {todos}
      <div className="todos-info">
        <p className="todos-count">
          {filter === 'completed' && '0 items left'}
          {filter !== 'completed' && (activeCount === 1 ? `1 item left` : `${activeCount} items left`)}
        </p>
        <div className="todos-states">
          <p className={filter === 'all' ? 'active' : ''} onClick={_ => setFilter('all')}>All</p>
          <p className={filter === 'active' ? 'active' : ''} onClick={_ => setFilter('active')}>Active</p>
          <p className={filter === 'completed' ? 'active' : ''} onClick={_ => setFilter('completed')}>Completed</p>
        </div>
        <p className="todos-clear" onClick={props.clearCompleted}>Clear Completed</p>
      </div>

      <div className="todos-states-mobile">
        <p className={filter === 'all' ? 'active' : ''} onClick={_ => setFilter('all')}>All</p>
        <p className={filter === 'active' ? 'active' : ''} onClick={_ => setFilter('active')}>Active</p>
        <p className={filter === 'completed' ? 'active' : ''} onClick={_ => setFilter('completed')}>Completed</p>
      </div>

      <p className="todos-helpnote">Drag and drop to reorder list</p>
    </div>
  </>
}

export default Todos;
