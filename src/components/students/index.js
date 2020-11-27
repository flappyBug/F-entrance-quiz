import React from 'react';
import './index.css';

const Students = ({ students }) =>
  students.map((student) => (
    <div key={student.id} className="student-cell">
      {`${student.id}.${student.name}`}
    </div>
  ));

export default Students;
