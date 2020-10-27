import React from 'react';

const GroupCell = ({ name, students }) => (
  <div>
    {name}
    {students.map((student) => (
      <div key={student.id} className="student-cell">
        {`${student.id}.${student.name}`}
      </div>
    ))}
    {students.map}
  </div>
);

export default GroupCell;
