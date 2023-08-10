
const initialState = [];

const EDIT_TASK = "EDIT_TASK";
const CREATE_TASK = "CREATE_TASK";
const DELETE_TASK = "DELETE_TASK";

const tasks = (state = {tasks: initialState}, action) => {
    const { payload } = action;
    switch (action.type) {
        case EDIT_TASK: {
            return {
                tasks: state.tasks.map(task => {
                    if (task.id === payload.id) {
                        return Object.assign({}, task, payload.params)
                    }
                    return task;
                }),
            }
        }
        case CREATE_TASK: {
            return {
                tasks: state.tasks.concat(action.payload)
            }
        }
        case DELETE_TASK: {
            return {
                tasks: state.tasks.filter(task => task.id !== action.id)
            }
        }
        default: 
            return state;
    }
}

export default tasks;