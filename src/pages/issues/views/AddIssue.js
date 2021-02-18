import React, { useState } from "react";
import Field from "../../../views/Field/Field";

const AddIssue = React.memo((props) => {
  const { handleAddIssue } = props;
  const [description, setDescription] = useState('');
  const [screen, setScreen] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddIssue({
      description,
      screen
    });

    setDescription('');
    setScreen('');
  };

  return (
    <form onSubmit={ handleSubmit }>
      <Field label="Описание" value={ description } onChange={ setDescription }/>
      <Field label="Скрин" value={ screen } onChange={ setScreen }/>
      <button>Добавить</button>
    </form>
  )
});

export default AddIssue;