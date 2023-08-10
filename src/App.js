import React from "react";
import { connect } from "react-redux";
import Page from "./components/Page";
import "bootstrap/dist/css/bootstrap.min.css";
import { editTask, createTask, deleteTask } from "./actions";

function App (props) {

    const onStatusChange = (id, status) => {
        props.dispatch(editTask(id,{status}))
    }

    const onCreateTask = ({title, description}) => {
        props.dispatch(createTask({title, description}))
    }

    const onDeleteTask = (id) => {
        props.dispatch(deleteTask(id))
    }

    return (
        <div>
            <Page tasks={props.tasks} onStatusChange={onStatusChange} onCreateTask={onCreateTask} onDeleteTask={onDeleteTask}/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
    };
};

export default connect(mapStateToProps)(App);