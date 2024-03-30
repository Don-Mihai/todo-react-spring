import React from 'react';
import './TaskList.scss';

function TaskList({ tasks }) {
    return (
        <div className="task-list">
            {tasks.map(task => (
                <div key={task.id} className="task-list__item">
                    {task.title}
                </div>
            ))}
        </div>
    );
}

export default TaskList;
