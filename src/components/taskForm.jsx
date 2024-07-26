import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, setSearchTitle, setSearchTime } from "../redux/tasksSlice";
import { Input, Button } from "antd";
import "./taskForm.css";

const { Search } = Input;

const AddTask = () => {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    const handleAdd = (e) => {
        e.preventDefault();
        if (title.trim()) {
            dispatch(addTask(title));
            setTitle("");
        }
    };

    const onSearchTitle = (value) => {
        dispatch(setSearchTitle(value));
    };

    const onSearchTime = (value) => {
        dispatch(setSearchTime(value));
    };

    return (
        <>
            <form onSubmit={handleAdd} className="task-form">
                <Input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="New task"
                />
                <Button type="primary" htmlType="submit">
                    Add Task
                </Button>
            </form>
            <Search
                style={{ width: 280 }}
                placeholder="search text"
                onChange={(e) => onSearchTitle(e.target.value)}
                enterButton
            />
            <Search
                style={{ width: 280, marginLeft: "20px" }}
                placeholder="search time"
                onChange={(e) => onSearchTime(e.target.value)}
                enterButton
            />
        </>
    );
};

export default AddTask;
