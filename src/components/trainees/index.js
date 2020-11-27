import React from 'react';
import './index.css';

const Trainees = ({ trainees }) =>
  trainees.map((trainee) => (
    <div key={trainee.id} className="trainee-cell">
      {`${trainee.id}.${trainee.name}`}
    </div>
  ));

export default Trainees;
