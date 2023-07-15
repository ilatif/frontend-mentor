import './AddTodo.css';

function AddTodo(props: { addTodo: (sring) => void }) {
  return <>
    <div className="add-todo-container">
      <input type="checkbox" className="todo-circle" disabled="disabled" />
      <input type="text" placeholder="Create a new todo..." className="todo-input" onKeyUp={(e) => {
        if (e.keyCode === 13) {
          props.addTodo(e.target.value);
          e.target.value = '';
        }
      }} />
    </div>
  </>
}

export default AddTodo;