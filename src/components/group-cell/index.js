import React from 'react';
import './index.css';

const GroupCell = ({ name, students }) => (
  <div>
    <header className="group-name">{name}</header>
    <div className="group-students">
      {students.map((student) => (
        // TODO GTB-工程实践: * 这块跟StudentList里面有重复，建议提取共用的组件
        <div key={student.id} className="student-cell">
          {`${student.id}.${student.name}`}
        </div>
      ))}
    </div>
  </div>
);

export default GroupCell;
