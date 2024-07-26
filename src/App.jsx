import "./App.css";
import TaskForm from "./components/taskForm";
import TaskList from "./components/taskList";

function App() {
    return (
        <>
            <div>
                <div className="app">
                    <h1 style={{ marginTop: "0px" }}>Todo List</h1>
                    <TaskForm />
                    <TaskList />
                </div>
            </div>
        </>
    );
}

export default App;
