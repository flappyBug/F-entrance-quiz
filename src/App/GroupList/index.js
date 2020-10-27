import Axios from 'axios';
import React, { Component } from 'react';
import GroupCell from '../GroupCell';

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
    Axios.get('http://localhost:8080/groups')
      .then((res) => res.data)
      .then((groups) => this.setState({ groups }));
  };

  render() {
    return (
      <div>
        <h1>分组列表</h1>
        <div>
          {this.state.groups.map(({ name, students }) => (
            <GroupCell name={name} students={students} />
          ))}
        </div>
      </div>
    );
  }
}
