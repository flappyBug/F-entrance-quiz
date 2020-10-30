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

  // TODO GTB-知识点: - 不建议把componentDidMount写成箭头函数，https://github.com/keajs/kea-saga/issues/2
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
        onChange={({ target }) => this.setState({ newStudentName: target.value })}
      />
      // TODO GTB-工程实践: * 这里可以不用在onChange的处理输入值，state也就不用管理newStudentName，onKeyPress的时候就可以直接拿到event.target.value
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
