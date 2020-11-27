import React, { useState } from 'react';

const AddTraineeButton = ({ onConfirm }) => {
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
      <button type="button" className="trainee-cell add-trainee" onClick={() => setEditing(true)}>
        +添加学员
      </button>
    );
  }
  return <input type="text" className="trainee-cell add-trainee" onKeyPress={onKeyPress} />;
};

export default AddTraineeButton;
