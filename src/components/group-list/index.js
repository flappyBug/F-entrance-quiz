import React, { Component } from 'react';
import GroupCell from '../group-cell';
import './index.css';
import * as Api from '../../api';

export default class GroupList extends Component {
  constructor() {
    super();
    this.state = {
      groups: [],
    };
  }

  componentDidMount() {
    this.fetchGroups();
  }

  fetchGroups = () => {
    Api.get('/groups')
      .then((res) => res.data)
      .then((groups) => this.setState({ groups }));
  };

  regroupStudents = () => {
    // TODO GTB-工程实践: - url 不太符合restful
    Api.post('/groups/regroup')
      .then((res) => res.data)
      .then((groups) => this.setState({ groups }));
  };

  render() {
    return (
      // TODO GTB-知识点: + html 标签使用合理
      <section className="group-list">
        <header>
          <h1>分组列表</h1>
          <button type="button" onClick={this.regroupStudents}>
            分组学员
          </button>
        </header>
        <div>
          {this.state.groups.map(({ name, students }) => (
            <GroupCell key={name} name={name} students={students} />
          ))}
        </div>
      </section>
    );
  }
}
