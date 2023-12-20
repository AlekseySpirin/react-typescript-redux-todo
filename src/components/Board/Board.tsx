import React, {FC} from 'react';
import Task from "../Task/Task";


interface BoardProps {
    title: string;
}


const taskList: Task[] = [
    {
        id: 1,
        title: 'Task 1',
        description: 'To do task 1'
    },
    {
        id: 2,
        title: 'Task 2',
        description: 'To do task 2'
    },
    {
        id: 3,
        title: 'Task 3',
        description: 'To do task 3'
    },

]


const Board: FC<BoardProps> = ({title}) => {
    return (
        <div>
            <h2>{title}</h2>
            <div>
                {taskList.map((item: Task):JSX.Element => (
                    <Task key={item.id} title={item.title} description={item.description}/>
                ))}
            </div>
        </div>
    );
};

export default Board;
