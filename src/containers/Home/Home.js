import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {

  render() {

    return (
      <div>
        <h1>Home Page!</h1>
         <ul role="nav">
          <li><Link to="/student">About</Link></li>
          <li><Link to="/teacher">Repos</Link></li>
        </ul>
      </div>
    );
  }
}