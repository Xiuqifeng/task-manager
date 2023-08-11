import React from "react";
import Task from "./Task";

function List (props) {

    const backgroundColor = {
        backgroundColor: "PapayaWhip",
    };

    return (
        <div>
            <div className="card-header text-center font-weight-bold" style={backgroundColor}>
                {props.status}
            </div>
            {props.tasks.map(task => (

                <Task key={task.id} task={task} onStatusChange={props.onStatusChange} onDeleteTask={props.onDeleteTask} />
            ))}
        </div>
    );
};

export default List;