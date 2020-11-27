import React, { useState } from 'react';

const AddStudentButton = ({ onConfirm }) => {
  const [editing, setEditing] = useState(false);
  const onKeyPress = (keyEvent) => {
    if (keyEvent.which !== 13) return;
    setEditing(false);
    const { target } = keyEvent;
    onConfirm(target.value);
    target.value = '';
  };
  if (!editing) {
    return (
      <button type="button" className="student-cell add-student" onClick={() => setEditing(true)}>
        +添加学员
      </button>
    );
  }
  return <input type="text" className="student-cell add-student" onKeyPress={onKeyPress} />;
};

export default AddStudentButton;
