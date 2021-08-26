import React from 'react'

export const ToDoElement = ({todo, onDelete}) => {
    return (
        <div className="container my-4">
            <h3>{todo.title}</h3>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>Delete</button>
        </div>
    )
}   