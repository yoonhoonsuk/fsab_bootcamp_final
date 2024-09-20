'use client'
import { useState } from "react";
import classes from "./new-task-styles.module.css";

function NewTask() {
    async function onSubmit() {
        const newTaskBody = {
            title,
            description,
            completed,
        };
        const res = await fetch("http://localhost:8080/", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newTaskBody)
        });
        {/*
             CHALLENGE: Can you get the table to reload whenever you call onSubmit? 
             This may involve restructuring your project and using props!
        */}
    }

    // NOTE: this is not the best way to collect data, but is good for demo purposes!
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(false);


    return (
        <div>
            <h3>Add New Task</h3>
            <button onClick={onSubmit}>Submit</button>
            <h4>Main Info</h4>
            <div>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input 
                        name="title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <input 
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="completed">Completed: </label>
                    <input 
                        type="boolean"
                        value={completed}
                        onChange={(event) => setCompleted(event.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}
export default NewTask;
