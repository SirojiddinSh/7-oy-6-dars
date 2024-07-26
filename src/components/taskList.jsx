import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask, deleteTask, editTask } from "../redux/tasksSlice";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import "./taskList.css";

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const searchTitle = useSelector((state) => state.tasks.searchTitle);
    const searchTime = useSelector((state) => state.tasks.searchTime);
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);
    const [newTitle, setNewTitle] = useState("");

    const handleEdit = (task) => {
        setIsEditing(true);
        setCurrentTask(task);
        setNewTitle(task.title);
    };

    const handleUpdate = () => {
        if (newTitle.trim()) {
            dispatch(editTask({ id: currentTask.id, title: newTitle }));
            setIsEditing(false);
            setCurrentTask(null);
            setNewTitle("");
        }
    };

    const filteredTasks = tasks.filter(
        (task) =>
            task.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
            task.time.toLowerCase().includes(searchTime.toLowerCase())
    );

    return (
        <div>
            <ul className="task-list">
                {filteredTasks.map((task) => (
                    <li
                        key={task.id}
                        className={`task ${task.completed ? "completed" : ""}`}
                    >
                        <span
                            style={{ fontSize: "20px" }}
                            onClick={() => dispatch(toggleTask(task.id))}
                        >
                            {task.title}
                        </span>
                        <div className="task-actions">
                            <span style={{ marginTop: "7px" }}>
                                {task.time}
                            </span>
                            <button
                                className="edit-btn"
                                onClick={() => handleEdit(task)}
                            >
                                <EditOutlined />
                            </button>
                            <button
                                className="delete-btn"
                                onClick={() => dispatch(deleteTask(task.id))}
                            >
                                <DeleteOutlined />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            {isEditing && (
                <div className="modal">
                    <Input
                        className="edit-input"
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="Basic usage"
                    />
                    <Button
                        style={{ marginRight: "10px", marginTop: "10px" }}
                        type="primary"
                        onClick={handleUpdate}
                    >
                        Update Task
                    </Button>
                    <Button type="default" onClick={() => setIsEditing(false)}>
                        Cancel
                    </Button>
                </div>
            )}
        </div>
    );
};

export default TaskList;
