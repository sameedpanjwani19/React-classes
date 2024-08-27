import { useRef, useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);

  const todoVal = useRef();

  const addTodo = (event) => {
    event.preventDefault();
    todo.push(todoVal.current.value);
    setTodo([...todo]);
    todoVal.current.value = "";
  };

  const editTodo = (index)=>{
    const editVal = prompt("enter value")

    todo.splice(index , 1 , editVal)
    setTodo([...todo])
  }

  const delTodo = (index) =>{
    todo.splice (index , 1)
    setTodo([...todo])
  }

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input type="text" ref={todoVal} />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
      {todo.map((item , index)=>{
        return <div key={index}>
          <li >{item}</li>
          <button onClick={editTodo}>Edit</button>
          <button onClick={delTodo}>Delete</button>
        </div>
      })}
    </ul>
    </>
  );
}

export default App;
