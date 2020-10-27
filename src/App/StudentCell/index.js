import React from 'react';
import './index.css';

const StudentCell = ({ name, id }) => <div>{`${id}.${name}`}</div>;
export default StudentCell;
