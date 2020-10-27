import React, { Component } from 'react';
import Axios from 'axios';
import StudentCell from '../StudentCell';

export default class StudentList extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
    };
  }

  componentDidMount = () => {
    Axios.get('http://localhost:8080/students')
      .then((res) => res.data)
      .then((students) => this.setState({ students }));
  };

  render() {
    return (
      <div>
        {this.state.students.map(({ id, name }) => (
          <StudentCell id={id} name={name} />
        ))}
      </div>
    );
  }
}
