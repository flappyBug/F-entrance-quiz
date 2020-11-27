import React from 'react';
import Trainees from '../trainees';
import './index.css';

const GroupCell = ({ name, trainees }) => (
  <div>
    <header className="group-name">{name}</header>
    <div className="group-trainees">
      <Trainees trainees={trainees} />
    </div>
  </div>
);

export default GroupCell;
