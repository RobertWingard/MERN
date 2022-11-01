import React from 'react'

export const Todo = ({ todo, toggleTodo }) => {
function handleTodoClick() {
    toggleTodo(todo.id)
}

    return (
        <div>
            <label className='flex' >
                <input  type="checkbox"  checked={todo.complete} onChange={handleTodoClick}/>
                <p style={{textDecoration: "line"}}>{todo.name}</p>
                
            </label>
        </div>
    )
}
