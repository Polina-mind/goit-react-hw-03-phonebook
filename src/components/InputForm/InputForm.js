import React from 'react';
import PropTypes from 'prop-types';
import './InputForm.css';

const InputForm = ({ id, name, number, onInputValue, onSubmit }) => {
  return (
    <form type="submit" onSubmit={onSubmit} className="Form">
      <label className="Label">
        Name
        <input
          id={id}
          className="Input"
          value={name}
          onChange={onInputValue}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label className="Label">
        Number
        <input
          id={id}
          className="Input"
          value={number}
          onChange={onInputValue}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>

      <button className="Button">Add contact</button>
    </form>
  );
};

InputForm.protoTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onInputValue: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default InputForm;
