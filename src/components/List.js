import React from "react";
import Task from "./Task"

function List (props) {
    return (
        <div>
            <div className="card-header text-center font-weight-bold">
                {props.status}
            </div>
            {props.tasks.map(task => (

                <Task key={task.id} task={task} onStatusChange={props.onStatusChange} onDeleteTask={props.onDeleteTask} />
            ))}
        </div>
    );
};

export default List;