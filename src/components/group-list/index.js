import React, { Component } from 'react';
import GroupCell from '../group-cell';
import './index.css';
import { get, post } from '../../api';

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
    get('/groups')
      .then((res) => res.data)
      .then((groups) => this.setState({ groups }));
  };

  regroupTrainees = () => {
    post('/groups/auto-grouping')
      .then(() => get('/groups'))
      .then((res) => this.setState({ groups: res.data }));
  };

  render() {
    return (
      <section className="group-list">
        <header>
          <h1>分组列表</h1>
          <button type="button" onClick={this.regroupTrainees}>
            分组学员
          </button>
        </header>
        <div>
          {this.state.groups.map(({ name, trainees }) => (
            <GroupCell key={name} name={name} trainees={trainees} />
          ))}
        </div>
      </section>
    );
  }
}
