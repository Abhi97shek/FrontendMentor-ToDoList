import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/configStore';
import moment from 'moment';
import {addTask} from './actions/toDoAction';
import { Provider } from 'react-redux';


store.dispatch(addTask({task:"Go to GYM",createAt:moment().format(),isActive:true,isCompleted:false}));
store.dispatch(addTask({task:"Work On React App",createAt:moment().format(),isActive:true,isCompleted:false}));
store.dispatch(addTask({task:"Eat  healthy",createAt:moment().format(),isActive:true,isCompleted:false}));




console.log(store.getState());


const jsx= (
<Provider store={store}>
  <React.StrictMode>
  <App />
  </React.StrictMode>
</Provider>
);
ReactDOM.render(jsx,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
