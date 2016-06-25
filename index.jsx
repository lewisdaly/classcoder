require("./node_modules/bootstrap/dist/css/bootstrap.min.css")

import App from './src/containers/App/App';
import Home from './src/containers/Home/Home';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Student from './src/containers/Student/Student';
import Teacher from './src/containers/Teacher/Teacher'



ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={Home}/>
      <Route path="/student/:studentId" component={Student}/>
      <Route path="/teacher" component={Teacher}/>
    </Route>
  </Router>
), document.getElementById('app')
);
