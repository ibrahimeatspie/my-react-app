import React, {useState, useRef} from 'react';
import TodoList from './TodoList'

function App() {
  const inputRef = useRef()
  const [todos, setTodos] = useState([])

  function handleAddTodo(e) {
    val = inputRef.current.value
    if (val==""){
      return
    }else{
      setTodos(prevTodos => {
        return prevTodos
      })
      inputRef.current.value = null

    }
    console.log(inputRef.current.value)
  }

  return (
    <>
      <TodoList todos ={todos}/>
      <input type="text" ref={inputRef}/>
      <button onClick = {handleAddTodo}>Add todo</button>
      <button>Clear completed TodoList</button>
      <div>
        0 left to do
      </div>
    </>
    
  )
}

export default App;
