import React, { useState } from 'react'

export const CreateToDo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description on entered")
        }else{
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className="container my-5">
            <div className="row">
                <form className="container" onSubmit={submit}>
                    <div className="mb-4 col-sm-8">
                        <label htmlFor="title" className="form-label"><h3>Todo Title</h3></label>
                        <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control shadow-sm" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-4 col-sm-8">
                        <label htmlFor="desc" className="form-label"><h3>Todo Description</h3></label>
                        <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control shadow-sm"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
