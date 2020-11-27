import React, { Component } from 'react';
import { get, post } from '../../api';
import './index.css';

export default class StudentList extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      isEditing: false,
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

  addStudent = (keyEvent) => {
    if (keyEvent.which !== 13) return;
    post('/students', {
      name: keyEvent.target.value,
    })
      .then(() => {
        this.setState({
          isEditing: false,
        });
      })
      .then(this.fetchStudents);
  };

  // TODO GTB-工程实践: + 复杂逻辑抽取方法，（这里也可以提取一个单独的组件）
  renderAddStudentCell = () => {
    if (!this.state.isEditing) {
      return (
        <button
          type="button"
          className="student-cell add-student"
          onClick={() => this.setState({ isEditing: true })}
        >
          +添加学员
        </button>
      );
    }
    return (
      <input
        type="text"
        className="student-cell add-student"
        value={this.state.newStudentName}
        onKeyPress={this.addStudent}
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
