import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

const TaskStatuses = ["To do", "Work in Progress", "Completed"]

const Task = (props) => {

    function onStatusChange(e) {
        props.onStatusChange(props.task.id, e.target.value)
    }

    function onDeleteTask() {
        props.onDeleteTask(props.task.id);
    }

    return (
        <div>
            <form onChange={onStatusChange}>
                <select defaultValue={props.task.status}>
                    {TaskStatuses.map(status => (
                        <option value={status} key={status}>{status}</option>
                    ))}
                </select>
            </form>
            <h2 className="card-title mt-3 px-2" style={{color: "#3a4"}}>{props.task.title}</h2>
            <p className="card-text mb-3 text-muted font-weight-bold px-2">{props.task.description}</p>
            <FontAwesomeIcon icon={faDeleteLeft} className="float-right m-5" style={{ color: "red", cursor: "pointer"}} onClick={() => onDeleteTask(props.task.id)}/>
        </div>
    );
};

export default Task;