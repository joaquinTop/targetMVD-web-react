import React, {PropTypes} from 'react';

const TextInput = (props) => {
  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };

  return (
    <input className="custom-input"
    type={props.type}
    placeholder={props.placeholder}
    value={props.value}
    onChange={handleChange}
    required={props.required}
    autoFocus={props.autofocus}
    />
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.string,
  autofocus: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default TextInput;
