import React from 'react';
import PropTypes from 'prop-types';
import './Contacts.css';

const Contacts = ({ contacts, onSubmit }) => {
  return (
    <section className="Contacts">
      <ul className="ContactsList">
        {contacts.map(({ id, name, number }) => (
          <li className="Item" key={id}>
            <span className="Name">{name}:</span>
            <span className="Number">{number}</span>
            <button
              className="ButtonDelete"
              type="submit"
              onClick={onSubmit}
              id={id}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Contacts;
