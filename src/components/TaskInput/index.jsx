import React from 'react';
import './TaskInput.scss';

function TaskInput() {
    return (
        <div className="task-input">
            <input className="task-input__field" type="text" placeholder="Добавить новую задачу..." />
            <button className="task-input__button">Добавить</button>
        </div>
    );
}

export default TaskInput;
