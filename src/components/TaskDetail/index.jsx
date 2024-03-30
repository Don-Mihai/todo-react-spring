import React from 'react';
import './TaskDetail.scss';

function TaskDetail({ task }) {
    return (
        <div className="task-detail">
            {task ? (
                <>
                    <h2 className="task-detail__title">{task.title}</h2>
                    <p className="task-detail__description">{task.description}</p>
                </>
            ) : (
                <p className="task-detail__message">Выберите задачу для просмотра деталей</p>
            )}
        </div>
    );
}

export default TaskDetail;
