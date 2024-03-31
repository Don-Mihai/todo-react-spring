import React, { useEffect, useState } from 'react';
import './Home.scss';
import Navigation from '../../components/Navigation';
import TaskList from '../../components/TaskList';
import TaskInput from '../../components/TaskInput';
import TaskDetail from '../../components/TaskDetail';
import axios from 'axios';

function App() {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState(null);

    useEffect(() => {
        getTasks();
    }, []);

    const getTasks = async () => {
        const tasks = (await axios.get('http://localhost:3001/tasks')).data;

        setTasks(tasks);
    };

    const addTask = async payload => {
        const task = (await axios.post('http://localhost:3001/tasks', payload)).data;

        setTasks([...tasks, task]);
    };

    const deleteTask = async id => {
        try {
            await axios.delete(`http://localhost:3001/tasks/${id}`);

            const newTasks = tasks.filter(item => item.id !== id);
            setTasks(newTasks);
        } catch (error) {}
    };

    const updateTask = async payload => {
        const task = (await axios.put(`http://localhost:3001/tasks/${payload.id}`, payload)).data;
        const newTasks = tasks.map(item => (item.id === payload.id ? payload : item));
        setTasks(newTasks);
    };

    const selectTask = task => {
        setCurrentTask(task);
    };

    return (
        <div className="app">
            <Navigation />
            <div className="app__content">
                <TaskList selectTask={selectTask} deleteTask={deleteTask} tasks={tasks} />
                <TaskInput onAdd={addTask} />
            </div>
            <TaskDetail updateTask={updateTask} task={currentTask} />
        </div>
    );
}

export default App;
