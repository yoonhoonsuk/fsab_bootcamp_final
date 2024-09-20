'use client'
import { useState, useEffect } from "react";
import classes from "./update-task-styles.module.css";

function UpdateTaskForm({ taskTitle }) {
    // State to hold the task data
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(false); // Boolean value

    // Fetch the task data when the component loads based on title
    useEffect(() => {
        async function fetchTask() {
            const res = await fetch(`http://localhost:8080/title/${taskTitle}`);
            const task = await res.json();

            // Set the task data to the state
            setDescription(task.description);
            setCompleted(task.completed);
        }
        fetchTask();
    }, [taskTitle]);

    async function onSubmit() {
        const updatedTaskBody = {
            description,
            completed,
        };
        const res = await fetch(`http://localhost:8080/title/${taskTitle}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedTaskBody)
        });
    }

    return (
        <div>
            <h3>Update Task</h3>
            <button onClick={onSubmit}>Submit</button>
            <h4>Main Info</h4>
            <div className={classes.mainForm}>
                <div>
                    <label htmlFor="description">Description: </label>
                    <input 
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </div>
                <div>
                    <label>
                        Completed: 
                        <input 
                            type="checkbox"
                            checked={completed}
                            onChange={(event) => setCompleted(event.target.checked)}
                        />
                    </label>
                </div>
            </div>
        </div>
    );
}

export default UpdateTaskForm;
