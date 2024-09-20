import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
dotenv.config()

import { db } from "./util/FirebaseInit.js";
import { collection, getDocs, query, where, updateDoc, addDoc } from "firebase/firestore"

// const { collection, getDocs, query, where, updateDoc, addDoc } = require('firebase/firestore');
// const db = require('./firebase'); // Your Firebase initialization

const app = express();
const port = 8080;

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);
app.use(bodyParser.urlencoded({ extended: false }))

// Get all tasks
app.get("/", async (req, res) => {
    console.log("Getting all tasks");
    const collectionRef = collection(db, "tasks")
    const collectionSnap = await getDocs(collectionRef)
    const docs = [];
    collectionSnap.forEach((doc) => {
        docs.push(doc.data())
    })
    res.send(docs)
})

// Add a new task
app.post("/", async (req, res) => {
    const taskRef = collection(db, "tasks")
    const taskBody = req.body
    try {
        await addDoc(taskRef, taskBody)
    } catch (e) {
        console.error(e)
        res.status(500).send("Error creating task")
    }
    res.status(200).send("Successfully Created Task")
})

// Update a task based on its title
app.put("/tasks/:title", async (req, res) => {
    const taskTitle = req.params.title; // Get the task title from the URL
    const taskUpdates = req.body; // Get the updated task data from the request body

    try {
        // Query Firestore for the task with the given title
        const taskQuery = query(collection(db, "tasks"), where("title", "==", taskTitle));
        const querySnapshot = await getDocs(taskQuery);

        if (querySnapshot.empty) {
            // If no task is found with that title, send a 404 response
            return res.status(404).send("Task not found");
        }

        // Get the first matching document reference
        const taskDocRef = querySnapshot.docs[0].ref;

        // Update the task with the new data
        await updateDoc(taskDocRef, {
            description: taskUpdates.description,
            completed: taskUpdates.completed
        });

        res.status(200).send("Successfully Updated Task");
    } catch (e) {
        console.error(e);
        res.status(500).send("Error updating task");
    }
})


function start() {
	app.listen(port, () => {
		console.log(`Started listening on http://localhost:${port}`)
	})
}

start()
