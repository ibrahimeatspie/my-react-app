import React, {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  console.log(localStorage.getItem(LOCAL_STORAGE_KEY))

  const inputRef = useRef()
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    //console.log(localStorage.getItem(LOCAL_STORAGE_KEY))
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    console.log(storedTodos)
    setTodos(prevTodos=>{
      return [...prevTodos, ...storedTodos]
    })
  }, [])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo(e) {
    let name = inputRef.current.value
    setTodos(function (previousTodos){
      
      return [...previousTodos, {name:name, id:uuidv4(), complete:false}]
    })
    inputRef.current.value = ''
  }

  function toggleTodo(id){

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
