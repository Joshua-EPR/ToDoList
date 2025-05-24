import { useState } from "react";

export default function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState("");

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleAddTask = () => {
        if (newTask.trim() === "") return;
        const task = {
            name: newTask,
            completed: false
        };
        setTasks([...tasks, task]);
        setNewTask("");
    };

    const handleEditClick = (index) => {
        setEditIndex(index);
        setEditValue(tasks[index].name);
    };

    const handleEditChange = (event) => {
        setEditValue(event.target.value);
    };

    const handleEditSave = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].name = editValue;
        setTasks(updatedTasks);
        setEditIndex(null);
        setEditValue("");
    };

    const handleDeleteTask = (index) => {
        const deletedTasks = tasks.filter((_, i) => i !== index);
        setTasks(deletedTasks);
    };

    const handleToggleComplete = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    return (
        <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-4">
            <div className="flex items-center mb-4">
                <input
                className="border border-gray-300 rounded-lg p-2 w-full mr-2"
                    type="text"
                    placeholder="Insert a task"
                    onChange={handleInputChange}
                    value={newTask}
                />
                <button onClick={handleAddTask} className="bg-blue-500 rounded-md text-white p-2 w-full">Add Task</button>
            </div>
            <ul className="h-64 overflow-y-auto p-4">
                {tasks.map((task, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            onChange={() => handleToggleComplete(index)}
                            checked={task.completed}
                            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer m-2"
                        />
                        {editIndex === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editValue}
                                    onChange={handleEditChange}
                                    className="border border-gray-300 rounded-lg p-2 w-[60%] mr-2"
                                />
                                <button className="bg-green-500 p-2 rounded-md text-white cursor-pointer" onClick={() => handleEditSave(index)}>Save</button>
                                <button className="bg-gray-500 p-2 rounded-md m-1 text-white cursor-pointer" onClick={() => setEditIndex(null)}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <span className="text-2xl" style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                                    {task.name}
                                </span>
                                <button className="p-2 bg-yellow-500 rounded-md m-1 text-white cursor-pointer" onClick={() => handleEditClick(index)}>Edit</button>
                            </>
                        )}
                        <button className="bg-red-500 p-2 m-1 rounded-md text-white cursor-pointer" onClick={() => handleDeleteTask(index)}>Delete</button>
                        <button className="bg-green-500 p-2 m-1 rounded-md text-white cursor-pointer" onClick={() => handleToggleComplete(index)}>
                            {task.completed ? "Undo" : "Complete"}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}