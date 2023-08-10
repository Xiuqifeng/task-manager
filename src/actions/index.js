import uuid from 'react-uuid';

const EDIT_TASK = "EDIT_TASK";
const CREATE_TASK = "CREATE_TASK";
const DELETE_TASK = "DELETE_TASK";

export const editTask = (id, params = {}) => {
    return {
        type: EDIT_TASK,
        payload: {
            id,
            params,
        }
    }
}

export const createTask = ({title, description}) => {
    return {
        type: CREATE_TASK,
        payload: {
            id: uuid(),
            title,
            description,
            status: "To do",
        }
    }
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        id,
    }
}