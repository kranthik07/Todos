import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import combinereducer from './reducers/combine reducer'; 
import './index.css';
import Todolist from './components/Todolist';

const store = createStore(combinereducer,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store ={store}><Todolist/></Provider>
    ,
  document.getElementById('root')
);


