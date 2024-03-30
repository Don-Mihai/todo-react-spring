import React from 'react';
import './TaskInput.scss';

function TaskInput({ onAdd }) {
    const handleAddTask = () => {
        onAdd();
        console.log('Добавить задачу');
    };

    return (
        <div className="task-input">
            <input className="task-input__field" type="text" placeholder="Добавить новую задачу..." />
            <button className="task-input__button" onClick={handleAddTask}>
                Добавить
            </button>
        </div>
    );
}

export default TaskInput;
