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

// Filter.protoTypes = {
//     contacts: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
// };

export default Filter;
