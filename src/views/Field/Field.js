import PropTypes from "prop-types";
import React from 'react';

const Field = React.memo(({ label, type = 'text', value, onChange }) => {
  return (
    <label style={{ display: 'block', margin: '10px 0' }}>
      { label } - &nbsp;
      <input 
        type={type} 
        value={value} 
        onChange={ e => onChange(e.target.value) }
      />
    </label>
  )
});

Field.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired
}

export default Field;