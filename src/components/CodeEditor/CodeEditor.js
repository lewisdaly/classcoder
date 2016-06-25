/* 
 * This component renders the code editor and render. These will be abtracted to separate
 * components, but will be together for now.
 *
 */
require('./CodeEditor.css');

import React from 'react';
import { Row, Col } from 'react-bootstrap';
// import Api from '../../api/Api';
import ErrorComponent from '../ErrorComponent';

const showdown  = require('showdown');
const converter = new showdown.Converter();

export default class CodeEditor extends React.Component {

  static state = {
    errors: [],
    textValue: "",
  };

  static propTypes = {
    studentId: React.PropTypes.string,
    group: React.PropTypes.object,
    editable:React.PropTypes.bool,
  }

  constructor(props) {
    super(props);

    this.state = {
      textValue: this.getTextValue(this.props.studentId),
    };

    // this.api = new Api();
  }

  componentWillReceiveProps(nextProps) {
    this.state = {
      textValue: this.getTextValue(nextProps.studentId),
    };
  }
 
  getTextValue(studentId) {
    const { group } = this.props;

    let textValue = '';
    group.students.forEach((student) => {
      if (student.studentId == studentId) {
        textValue = student.code;
      }
    });

    return textValue;
  }

  setTextValue(textValue) {
    const { group, studentId } = this.props;

    group.students.forEach((student) => {
      if (student.studentId == studentId) {
        student.code = textValue;
      }
    });

  }

  onTextChanged(event) {
    this.setState({
      textValue: event.target.value,
    });

    this.setTextValue(event.target.value);

    //We don't need to check for errors here
    // this.api.checkHtml(event.target.value)
    // .then((response) => {
    //   this.setState({
    //     errors: response,
    //   });
    // })
    // .catch((err) => {
    //   console.error(err);
    // });
  }

  render() {
    const { errors, textValue } = this.state;

    const html = converter.makeHtml(textValue);
    const htmlToSet = {__html: html};

    return (
      <div>
        <Row>
          <Col sm={6}>
            <textarea 
              className="pad" 
              onChange={(value) => this.onTextChanged(value)}
              value={textValue}
              />
          </Col>
          <Col sm={6}>
            <div dangerouslySetInnerHTML={htmlToSet} />
          </Col>
        </Row>
      </div>
    );
  }
}