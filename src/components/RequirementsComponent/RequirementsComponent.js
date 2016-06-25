

import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class RequirementsComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  getWriteUp() {
    const { writeup } = this.props;
    const html = {__html: writeup};

    return (
      <div>
        <h5>Your Responsibilities</h5>
        <div dangerouslySetInnerHTML={html} />
      </div>
    );
  }

  getChecklist() {
    const { checklist } = this.props;

    return (
      <div>
        <h5>Checklist:</h5>
        <ul>
          {checklist.map((item) => this.getChecklistItem(item))}
        </ul>
      </div>
    );
  }

  getChecklistItem(item) {

    return (
      <li key={item.id}>{item.text}</li>
    );
  } 

  render() {
    return (
      <div>
        <Row>
          <Col sm={6}>
            {this.getWriteUp()}
          </Col> 
          <Col sm={6}>
            {this.getChecklist()}
          </Col> 
        </Row>
      </div>
    );
  }
}