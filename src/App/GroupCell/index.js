import React from 'react';
import './index.css';

const GroupCell = ({ name, students }) => (
  <div>
    <header className="group-name">{name}</header>
    <div className="group-students">
      {students.map((student) => (
        <div key={student.id} className="student-cell">
          {`${student.id}.${student.name}`}
        </div>
      ))}
    </div>
  </div>
);

export default GroupCell;
