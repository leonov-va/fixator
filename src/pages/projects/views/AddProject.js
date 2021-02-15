import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddProject = React.memo(({ handleAddProject }) => {
  const [projectName, setProjectName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddProject(projectName);
    setProjectName('');
  };

  return (
    <form onSubmit={ handleSubmit }>
      <input 
        type="text" 
        placeholder="Введите имя проекта" 
        value={projectName} 
        onChange={(e) => setProjectName(e.target.value)} 
      />
      <button>Создать</button>
    </form>
  )
});

AddProject.propTypes = {
  handleAddProject: PropTypes.func.isRequired
}

export default AddProject;