import React from 'react';
import ReactDOM from 'react-dom';
// var router = require('./stores/RouteStore.react.jsx').getRouter();
import RouteStore from  './stores/RouteStore.react.jsx'
import reportWebVitals from './reportWebVitals';
window.React = React;
RouteStore.getRouter().run(function (Handler, state) {
  ReactDOM.render(
    <React.StrictMode>
      <Handler />
    </React.StrictMode>,
    document.getElementById('content') // NOTE why not id?
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();