import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

const Filter = ({ onInputFilter }) => {
  return (
    <div>
      <p className="FindTitle">Find contacts by name</p>

      <input
        className="InputFilter"
        onChange={onInputFilter}
        type="text"
        name="filter"
      />
    </div>
  );
};

Filter.protoTypes = {
  onInputFilter: PropTypes.func.isRequired,
};

export default Filter;
