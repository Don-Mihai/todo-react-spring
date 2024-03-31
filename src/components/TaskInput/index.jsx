import React from 'react';
import './TaskInput.scss';
import { useState } from 'react';

function TaskInput({ onAdd }) {
    const [formValues, setFormValues] = useState({ title: '' });

    const onChange = event => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value });
    };

    const handleAddTask = () => {
        onAdd(formValues);
        console.log('Добавить задачу');
    };

    return (
        <div className="task-input">
            <input name="title" onChange={onChange} value={formValues.title} className="task-input__field" type="text" placeholder="Добавить новую задачу..." />
            <button className="task-input__button" onClick={handleAddTask}>
                Добавить
            </button>
        </div>
    );
}

export default TaskInput;
