import React, { useState } from 'react';
import './Home.scss';
import Navigation from '../../components/Navigation';
import TaskList from '../../components/TaskList';
import TaskInput from '../../components/TaskInput';
import TaskDetail from '../../components/TaskDetail';

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Задача 1', description: 'Описание задачи 1' },
        { id: 2, title: 'Задача 2', description: 'Описание задачи 2' },
        { id: 3, title: 'Задача 3', description: 'Описание задачи 3' },
        // Добавьте больше задач по желанию
    ]);
    const [currentTask, setCurrentTask] = useState(null);

    const addTask = () => {
        const newTasks = [...tasks, { id: 4, title: 'Задача 4', description: 'Описание задачи 4' }];
        setTasks(newTasks);

        console.log('Родительская');
    };

    const deleteTask = id => {
        const newTasks = tasks.filter(item => item.id !== id);
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
            <TaskDetail task={currentTask} />
        </div>
    );
}

export default App;
