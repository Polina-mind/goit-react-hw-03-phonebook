import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

class Filter extends Component {
  state = {
    filter: '',
  };

  handleChange = event => {
    this.setState({ filter: event.target.value });
    this.props.onInputFilter(event.target.value);
  };

  render() {
    const { filter } = this.state;

    return (
      <div>
        <p className="FindTitle">Find contacts by name</p>

        <input
          className="InputFilter"
          value={filter}
          onChange={this.handleChange}
          type="text"
          name="filter"
        />
      </div>
    );
  }
}

Filter.propTypes = {
  onInputFilter: PropTypes.func.isRequired,
};

export default Filter;
