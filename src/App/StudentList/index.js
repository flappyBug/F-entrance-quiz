/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import * as Api from '../api';
import './index.css';

export default class StudentList extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      isEditing: false,
      newStudentName: '',
    };
  }

  fetchStudents = () => {
    Api.get('/students')
      .then((res) => res.data)
      .then((students) => this.setState({ students }));
  };

  componentDidMount = () => {
    this.fetchStudents();
  };

  addStudent = (key) => {
    if (key.which !== 13) return;
    Api.post('/students', {
      name: this.state.newStudentName,
    })
      .then(() => {
        this.setState({
          isEditing: false,
          newStudentName: '',
        });
      })
      .then(this.fetchStudents);
  };

  renderAddStudentCell = () => {
    if (!this.state.isEditing) {
      return (
        <div
          className="student-cell add-student"
          onClick={() => this.setState({ isEditing: true })}
        >
          +添加学员
        </div>
      );
    }
    return (
      <input
        type="text"
        className="student-cell add-student"
        value={this.state.newStudentName}
        onKeyPress={this.addStudent}
        onChange={({ target }) => this.setState({ newStudentName: target.value })}
      />
    );
  };

  render() {
    return (
      <section>
        <h1>学员列表</h1>
        <div className="student-list">
          {this.state.students.map(({ id, name }) => (
            <div key={id} className="student-cell">
              {`${id}.${name}`}
            </div>
          ))}
          {this.renderAddStudentCell()}
        </div>
      </section>
    );
  }
}
