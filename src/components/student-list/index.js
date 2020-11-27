import React, { Component } from 'react';
import { get, post } from '../../api';
import AddStudentButton from '../add-student-button';
import Students from '../students';
import './index.css';

export default class StudentList extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    this.fetchStudents();
  }

  fetchStudents = () => {
    get('/students')
      .then((res) => res.data)
      .then((students) => this.setState({ students }));
  };

  addStudent = (name) => {
    post('/students', {
      name,
    }).then(this.fetchStudents);
  };

  render() {
    return (
      <section>
        <h1>学员列表</h1>
        <div className="student-list">
          <Students students={this.state.students} />
          <AddStudentButton onConfirm={this.addStudent} />
        </div>
      </section>
    );
  }
}
