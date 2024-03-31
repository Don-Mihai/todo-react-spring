import React, { useState, useEffect } from 'react';
import './TaskDetail.scss';

const initalState = {
    title: '',
    description: '',
};

function TaskDetail({ task, updateTask }) {
    const [formValues, setFormValues] = useState(initalState);

    useEffect(() => {
        setFormValues({ ...initalState, ...task });
    }, [task]);

    const onChange = event => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value });
    };

    const save = () => {
        updateTask(formValues);
    };

    const cancel = () => {
        setFormValues(initalState);
    };

    return (
        <div className="task-detail">
            {task ? (
                <>
                    <input name="title" onChange={onChange} type="text" className="task-detail__title" value={formValues?.title} />
                    <textarea name="description" onChange={onChange} className="task-detail__description" value={formValues?.description} />
                    <button onClick={save} className="task-detail__button">
                        Сохранить
                    </button>
                    <button onClick={cancel}>Отменить</button>
                </>
            ) : (
                <p className="task-detail__message">Выберите задачу для просмотра деталей</p>
            )}
        </div>
    );
}

export default TaskDetail;
