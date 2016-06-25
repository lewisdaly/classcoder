import React from 'react';
import { Row, Col, ButtonGroup, Button, Modal } from 'react-bootstrap';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import RequirementsComponent from '../../components/RequirementsComponent';
import AlertContainer from 'react-alert';


export default class Student extends React.Component {

  state = {
    showModal:false,
  }

  constructor(props) {
    super(props);

  }

  onSubmit() {
    //Present a dialog to user, asking them to confirm
    this.setState({
      showModal:true,
    });
  }

  confirmSubmit(submit) {
    this.setState({
      showModal: false,
    });

    if (submit == false) {
      return null;
    }

    //Submit the assigment, and clear the code!

  } 

  getStudentSelector() {
    const { assignment } = this.props;
    const students = assignment.group.students;
    const style = {

    };
    
    return (
      <ButtonGroup style={style}>
        {students.map((student) => this.getStudentButton(student))}
      </ButtonGroup>

    );
  }

  //This needs to update the route parameters
  getStudentButton(student) {
    const link = "#/student/" + student.studentId
    let className = '';
    if (student.studentId == this.props.params.studentId) {
      className = className + ' active';
    }

    return (
      <Button key={student.studentId} href={link} className={className}>
        {student.name}
      </Button>
    );
  }

  getSubmitButton() {

    return (
      <Button bsStyle="primary" onClick={() => this.onSubmit()}>Submit</Button>
    );
  }

  getModal() {
    const { showModal } = this.state; 
    if (showModal == false) {
      return null;
    }

    //We are handling the show and hide ourselves
    return (
      <Modal show={true}>
        <Modal.Header>
          <Modal.Title>Are you sure you want to submit?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Make sure you have checked with your teammates first!</p>
          <Row>
            <Col sm={4} smOffset={4}>
              <Button onClick={() => this.confirmSubmit(false)}style={{marginRight:'0.2em'}}>Cancel</Button>  
              <Button onClick={() => this.confirmSubmit(true)} style={{marginLeft:'0.2em'}} bsStyle="primary">Submit</Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    );
  }

  render() {
    const { assignment, currentUser } = this.props;
    const studentId = this.props.params.studentId;

    let editable = false;
    if (studentId == currentUser.studentId) editable = true;

    //we set editable based on the route params, and the logged in student
    return (
      <div>
        {this.getModal()}
        <AlertContainer ref={(a) => global.msg = a} {...this.alertOptions} />
        <Row style={{marginBottom:'1em'}}>
          <Col sm={10}>{this.getStudentSelector()}</Col>
          <Col sm={2}>{this.getSubmitButton()}</Col>
        </Row>
        <CodeEditor studentId={studentId} group={assignment.group} editable={editable}/>
        <RequirementsComponent checklist={assignment.checklist} writeup={assignment.writeup}/>
      </div>
    );
  }
}