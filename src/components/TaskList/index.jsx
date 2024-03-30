import React from 'react';
import './TaskList.scss';

function TaskList({ tasks, deleteTask, selectTask }) {
    return (
        <div className="task-list">
            {tasks.map(task => (
                <div onClick={() => selectTask(task)} key={task.id} className="task-list__item">
                    {task.title}
                    <button onClick={() => deleteTask(task.id)}>x</button>
                </div>
            ))}
        </div>
    );
}

export default TaskList;
