import React from 'react';
import './Home.scss';
import Navigation from '../../components/Navigation';
import TaskList from '../../components/TaskList';
import TaskInput from '../../components/TaskInput';
import TaskDetail from '../../components/TaskDetail';

function App() {
    // Моковые данные
    const tasks = [
        { id: 1, title: 'Задача 1', description: 'Описание задачи 1' },
        { id: 2, title: 'Задача 2', description: 'Описание задачи 2' },
        // Добавьте больше задач по желанию
    ];

    return (
        <div className="app">
            <Navigation />
            <div className="app__content">
                <TaskList tasks={tasks} />
                <TaskInput />
            </div>
            <TaskDetail task={tasks[0]} />
        </div>
    );
}

export default App;
