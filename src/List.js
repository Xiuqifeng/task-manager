import React from "react";
import Task from "./Task";
import "./List.scss";

function List (props) {
    return (
        <div>
            <div className="card-header text-center font-weight-bold card-title">
                {props.status}
            </div>
            {props.tasks.map(task => (

                <Task key={task.id} task={task} onStatusChange={props.onStatusChange} onDeleteTask={props.onDeleteTask} />
            ))}
        </div>
    );
};

export default List;