// src/MultiSelect.js
import React from 'react';
import PropTypes from 'prop-types';
import { Autocomplete, TextField } from '@mui/material';

const MultiSelect = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleChange = (event, value) => {
    setSelectedOptions(value);
  };

  return (
    <Autocomplete
      multiple
      options={options}
      getOptionLabel={(option) => option.title}
      value={selectedOptions}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Select multiple options"
          placeholder="Options"
        />
      )}
      style={{ width: 300 }}
    />
  );
};

MultiSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MultiSelect;
