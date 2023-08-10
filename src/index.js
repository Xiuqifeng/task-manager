import React from "react";
import ReactDom from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import tasks from "./reducers";
import App from "./App";

const store = createStore(tasks) 

ReactDom.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById("root")
)