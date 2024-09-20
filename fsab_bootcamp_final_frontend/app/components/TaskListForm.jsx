'use client'
import { useEffect, useState } from "react"
import classes from "./task-list-form-styles.module.css";

function TaskList() {
    const [tasks, setTasks] = useState([]);

    async function getAllTasks() {
        // fetch the URL 
        const res = await fetch("http://localhost:8080", {
            method: "GET",
        })
        // We turn the result into a JSON. We could have also turned it into a string, for instance
        const resJSON = await res.json()
        setTasks(resJSON)
    }

    useEffect(() => {
        getAllTasks()
    }, [])

    return (
        // <div className={styles.taskListContainer}>
        <div>
            <h2>Task List</h2>
            <button onClick = {getAllTasks}>
                Reload
            </button>
            <table>
                <tbody>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Completed</th>
                </tr>
                {tasks.map((task) => 
                <tr key={task.id}>
                {/* <tr key={task.id} className={styles.taskItem}> */}
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{task.completed ? 'Completed' : 'In Progress'}</td>
                </tr>
                )}
                </tbody>
        </table>
        </div>
    )
}

export default TaskList;
