'use client'
import { useState, useEffect } from "react";
import classes from "./update-task-styles.module.css";

function UpdateTask() {
    const [tasks, setTasks] = useState([]); // State to hold all tasks
    const [selectedTask, setSelectedTask] = useState(""); // State to hold the selected task
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(false);

    // Fetch all tasks when the component loads
    useEffect(() => {
        async function fetchTasks() {
            const res = await fetch("http://localhost:8080/"); // Fetch all tasks
            const data = await res.json();
            setTasks(data); // Store tasks in state
        }
        fetchTasks();
    }, []);

    // Fetch the selected task's details when a task is selected
    useEffect(() => {
        if (selectedTask) {
            async function fetchTaskDetails() {
                const res = await fetch(`http://localhost:8080/tasks/${selectedTask}`);
                const task = await res.json();
                setDescription(task.description);
                setCompleted(task.completed);
            }
            fetchTaskDetails();
        }
    }, [selectedTask]);

    // Function to handle form submission
    async function onSubmit() {
        const updatedTaskBody = {
            description,
            completed,
        };

        // Log the updated data to check correctness
        console.log("Updating task with data:", updatedTaskBody);

        const res = await fetch(`http://localhost:8080/tasks/${selectedTask}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedTaskBody)
        });

        if (res.status === 200) {
            console.log("Task successfully updated");
        } else {
            console.error("Error updating task", await res.text());
        }
    }

    return (
        <div>
            <h3>Update Task</h3>
            {/* Dropdown to select a task */}
            <select
                value={selectedTask}
                onChange={(event) => setSelectedTask(event.target.value)}
                className={classes.select}
            >
                <option value="">Select a Task</option>
                {tasks.map((task, index) => (
                    <option key={index} value={task.title}>
                        {task.title}
                    </option>
                ))}
            </select>
            {/* Form to update the task */}
            {selectedTask && (
                <>
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
                </>
            )}
        </div>
    );
}

export default UpdateTask;
