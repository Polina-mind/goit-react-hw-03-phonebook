import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

class Filter extends Component {
  static propTypes = {
    onInputFilter: PropTypes.func.isRequired,
  };

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

export default Filter;
