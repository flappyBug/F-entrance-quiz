import React, { Component } from 'react';
import { get, post } from '../../api';
import AddTraineeButton from '../add-trainee-button';
import Trainees from '../trainees';
import './index.css';

export default class TraineeList extends Component {
  constructor() {
    super();
    this.state = {
      trainees: [],
    };
  }

  componentDidMount() {
    this.fetchTrainees();
  }

  fetchTrainees = () => {
    get('/trainees?grouped=false')
      .then((res) => res.data)
      .then((trainees) => this.setState({ trainees }));
  };

  addTrainee = (name) => {
    post('/trainees', {
      name,
    }).then(this.fetchTrainees);
  };

  render() {
    return (
      <section>
        <h1>学员列表</h1>
        <div className="trainee-list">
          <Trainees trainees={this.state.trainees} />
          <AddTraineeButton onConfirm={this.addTrainee} />
        </div>
      </section>
    );
  }
}
