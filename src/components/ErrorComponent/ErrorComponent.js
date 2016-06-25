/**
 * This component displays errors from a list of error objects
 */


import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class ErrorComponent extends React.Component {

  static proptypes = {
    errors: React.PropTypes.array
  }

  state = {
    errors: this.props.errors,
  }

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      errors: nextProps.errors
    });
  }

  getErrorList() {
    const { errors } = this.state;
    if (!errors) {
      return null;
    }
    console.log("errors", errors)

    return (
      <ul>
        {errors.map((error) => this.getErrorListItem(error))}
      </ul>
    );
  }

  getErrorListItem(error) {
    return (
      <li key={error.message}>{error.message}</li>
    );
  }
 
  render() {
    const { errors } = this.state;
    
    let errorText = ""
    if (errors) {
      errorText = "Found " + errors.length + " errors.";
    }

    return (
      <div>
        <h4>Errors:</h4>
        <h5>{errorText}</h5>
        {this.getErrorList()}
      </div>
    );
  }
}