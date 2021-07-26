import React, { useState } from "react";

function Inserttodo(props) {
  const [Todo, setTodo] = useState("");
  const [Todos, setTodos] = useState([]);
  const createtodo = (e) => {
    e.preventDefault();
    setTodos([...Todos,Todo])
  };
  let handleRemoveItem = (index) => {
    const delarr = Todos.filter((item,i)=>{
      return i !== index;
    })
    setTodos(delarr);

  };
  
  return (
    <>
      <form onSubmit={createtodo}>
        <div>
          <label>Username: </label>
          <input type="text" onChange={(e) => setTodo(e.target.value)} />
          <input type="submit" value="Create box" />
          </div>
      </form>
      {Todos.map((item, i) => {
        return(
          <div>
            <input type="checkbox" onChange={(e) => e.target.checked} /> {item}
            <button name={i} onClick={(e)=> {handleRemoveItem(i);}}>
              delete
            </button>
          </div>
        )
      })}

    </>
  );
}

export default Inserttodo;
