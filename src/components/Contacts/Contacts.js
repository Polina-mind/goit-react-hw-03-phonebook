import React from 'react';
import PropTypes from 'prop-types';
import './Contacts.css';

const Contacts = ({ contacts, filteredContacts, onSubmit }) => {
  let renderContacts = contacts;
  if (filteredContacts) {
    renderContacts = filteredContacts;
  }

  return (
    <section className="Contacts">
      <ul className="ContactsList">
        {renderContacts.map(({ id, name, number }) => (
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

Contacts.protoTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Contacts;
