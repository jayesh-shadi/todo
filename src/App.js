import { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);

  const saveTodoList = (event) => {
    event.preventDefault();
    const toName = event.target.elements.toname.value.trim();
    
    if (!toName) {
      alert('Please enter a todo item.');
      return;
    }

    if (!todoList.includes(toName)) {
      setTodoList([...todoList, toName]);
    } else {
      alert('This item already exists in the list');
    }

    event.target.reset(); // Clear input field after adding
  };

  const deleteItem = (item) => {
    setTodoList(todoList.filter(todo => todo !== item));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={saveTodoList}>
        <input type='text' name='toname' />
        <button type="submit">Save</button>
      </form>
      <div className='outerDiv'>
        <ul>
          {todoList.map((value, index) => (
            <TodoListItems key={index} value={value} onDelete={() => deleteItem(value)} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function TodoListItems({ value, onDelete }) {
  return (
    <li>
      {value} <span onClick={onDelete} style={{ cursor: 'pointer', color: 'red', marginLeft: '10px' }}>&times;</span>
    </li>
  );
}

export default App;
