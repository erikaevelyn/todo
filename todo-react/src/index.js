import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import toDoReducer from './store/todoReducer';
import ToDo from './ToDo/ToDo';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import * as serviceWorker from './serviceWorker';

const store = createStore(toDoReducer);
ReactDOM.render(<Provider store={store}>
    <ToDo/>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
