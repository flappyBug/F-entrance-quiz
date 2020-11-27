import React from 'react';
import Students from '../students';
import './index.css';

const GroupCell = ({ name, students }) => (
  <div>
    <header className="group-name">{name}</header>
    <div className="group-students">
      <Students students={students} />
    </div>
  </div>
);

export default GroupCell;
