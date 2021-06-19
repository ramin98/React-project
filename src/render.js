import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addNewPost} from './redux/state'

export let renderPage = (state) => {
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App state={state} addNewPost={addNewPost}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
}