import React, { useState, useRef, useEffect } from 'react';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid'
import "./App.css"

const LOCAL_STORAGE_KEY = "todoApp.todos"

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === "") return
    console.log(name)
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })
    // this will clear the box for you
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)

  }
  function handleClick(event) {
    if(event.target.style.textDecoration) {
      event.target.style.removeProperty('text-decoration');
      }else{
        event.target.style.setProperty('text-decoration', 'line-through')
      }
  }
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <div className='flex'>
      <input ref={todoNameRef} type="text" />
      </div>
      <div className='flex'>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos} >Clear Completed</button>
      </div>
      <div className='flex'>{todos.filter(todo => !todo.complete).length} things left to do</div>
      
    </>
  )
}

export default App;
