import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { Provider } from "react-redux";
import configureStore from "./store";
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {BrowserRouter} from 'react-router-dom';
ReactDOM.render
(
<BrowserRouter>
<Provider store={configureStore()}><App /></Provider>

</BrowserRouter>, document.getElementById('root'));

