import React from 'react'
import {ToDoElement} from "./ToDoElement";

export const ToDos = (props) => {
    let mystle ={
        minHeight: "70vh"
    }
    return (
        <div className="container" style={mystle}>
            <h2 className="text-center my-4">ToDo Lists</h2>
            {props.todos.length===0? <h3>No Todos</h3>:
            props.todos.map((todo) => {
                return (
                    <div key={todo.sno}>
                    <ToDoElement todo={todo} onDelete={props.onDelete}/>
                    <hr/>
                    </div>
                )
                // return todo.title
            })}
        </div>
    )
}
