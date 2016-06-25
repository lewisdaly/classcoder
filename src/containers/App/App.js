import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

//For now, load a static assignment here. We will persist later on
let assignment = {
  checklist: [
    {id:0,text: '3 Font Sizes'},
    {id:1,text: '3 Font Colours'},
    {id:2,text: 'Background Colour'},
    {id:3,text: 'Table'},
    {id:4,text: 'Hyperlink'},
    {id:5,text: 'Picture'},
  ],
  writeup: "<p>Your client wants an informational webpage about Star Wars.</br></br>Your group's website must include the following information:</br></br><ul><li>Who is R2D2</li><li>Who built C3PO</li><Who captains the Millenium Falcon?</li><p>",
  group: {
    students: [
      {studentId:0, name:'Han', code:'1'},
      {studentId:1, name:'Leia', code:'2'},
      {studentId:2, name:'BB8', code:'3'},
      {studentId:3, name:'Angsty Teenager with no real motives', code:'4'}
    ]
  },
  rubric: {
    text:'Hello, I\'m a rubric.'
  }
}

let currentUser =  {
  teacherId:-1,
  studentId:1
}

export default class App extends React.Component { 

  constructor(props) {
    super(props);

  }

  /* TODO: change this depending on who is logged in! */
  getNavBar() {
    const studentLink = '#/student/' + currentUser.studentId;

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#/home">classcoder!</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href={studentLink}>Student</NavItem>
          <NavItem eventKey={2} href="#/teacher">Teacher</NavItem>
        </Nav>
      </Navbar>
    );
  }

  render() {
    return (
      <div> 
        {this.getNavBar()}
        {this.props.children ? React.cloneElement(this.props.children, {assignment:assignment, currentUser:currentUser}) : null}
      </div>
    );
  }
}
