import React, {useState} from "react";
import List from "./List";


const TaskStatuses = ["To do", "Work in Progress", "Completed"]

function Page (props) {
    const [cardForm, showCardForm] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const formToggler = () => {
        showCardForm(!cardForm)
    }

    const resetForm = () => {
        setTitle("");
        setDescription("");
        showCardForm(false);
    }

    const onCreateTask = (e) => {
        e.preventDefault();
        props.onCreateTask({
            title,
            description
        })
        resetForm();
    }

    const backgroundColor1 = {
        backgroundColor: "BurlyWood",
    };

    const backgroundColor2 = {
        backgroundColor: "PapayaWhip",
    };

    const renderTaskLists = () => {
        const {tasks} = props;

        return TaskStatuses.map((status, id) =>{
            const statusTasks = tasks.filter((task) => task.status === status);

            return (
                <div className="col-md-3 card m-5 p-0" key={id}>
                    <List key={status} status={status} tasks={statusTasks} onStatusChange={props.onStatusChange} onDeleteTask={props.onDeleteTask} />
                </div>
            )
        })
    };

    return (
        <div className="container my-5">
            <div className="py-3">
                <div className="d-flex justify-content-center py-3" style={backgroundColor2}>
                    <div>
                        <h1 className="display-5 font-weight-bold">TASK MANAGER</h1>
                    </div>
                    <div>
                        <button className="btn m-3" style={backgroundColor1} onClick={formToggler}>+</button>
                    </div>
                </div>
                {cardForm && (
                <form onSubmit={onCreateTask}>
                    <div className="form-group">
                        <input type="text" className="form-control mt-5" style={backgroundColor2} placeholder="Enter Task" onChange={onChangeTitle} />
                    </div>
                    <div className="form-group">
                        <textarea type="text" className="form-control mt-3" style={backgroundColor2} placeholder="Task Description" onChange={onChangeDescription} />
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
                )}
            </div>
            <div className="row d-flex justify-content-center position-relative">
                {renderTaskLists()}
            </div>
        </div>
    );
};

export default Page;