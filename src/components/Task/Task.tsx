import React, {FC} from 'react';

export interface TaskProps {
    title: string;
    description: string;
}

interface Task {
    id?: number
    title: string;
    description: string;
}

const Task:FC<Task> = ({title, description}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Task;
