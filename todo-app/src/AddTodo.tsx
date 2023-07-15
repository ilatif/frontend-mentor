import './AddTodo.css';

function AddTodo(props: { addTodo: (text: string) => void }) {
  return <>
    <div className="add-todo-container">
      <input type="checkbox" className="todo-circle" disabled={false} />
      <input type="text" placeholder="Create a new todo..." className="todo-input" onKeyUp={(e) => {
        if (e.keyCode === 13) {
          const target = e.target as HTMLInputElement;
          props.addTodo(target.value);
          target.value = '';
        }
      }} />
    </div>
  </>
}

export default AddTodo;