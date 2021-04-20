import React, { Component } from 'react';
import InputForm from '../InputForm';

class Form extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
  };

  onInputValue = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <InputForm
        id={this.nameInputId}
        name={name}
        number={number}
        onInputValue={this.onInputValue}
        onSubmit={this.onSubmit}
      ></InputForm>
    );
  }
}

export default Form;
