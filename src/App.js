import React, { Component } from 'react';
import Form from './components/Form';
import Contacts from './components/Contacts';
import Filter from './components/Filter';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filteredContacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    // console.log('prevContacts', prevContacts);
    // console.log('nextContacts', nextContacts);

    if (nextContacts !== prevContacts) {
      // console.log('Обновилось поле contacts, записываю contacts в хранилище');
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    if (name !== '' && number !== '') {
      const namesArr = this.state.contacts.map(({ name }) => name);
      if (namesArr.includes(contact.name)) {
        alert('Contact already exist');
        return;
      }
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  deleteContact = event => {
    event.preventDefault();
    const id = event.currentTarget.id;
    const { contacts, filteredContacts } = this.state;

    this.setState({
      contacts: contacts.filter(contact => contact.id !== id),
      filteredContacts: filteredContacts.filter(contact => contact.id !== id),
    });
  };

  onInputFilter = filter => {
    const contacts = this.state.contacts;

    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );

    this.setState({ filteredContacts: filteredContacts, filter: filter });
  };

  render() {
    const { contacts, filteredContacts, filter } = this.state;

    return (
      <>
        <h2 className="Title">Phonebook</h2>
        <Form onSubmit={this.addContact}></Form>

        <h2 className="Title">Contacts</h2>
        <Filter onInputFilter={this.onInputFilter}></Filter>

        <Contacts
          contacts={filter ? filteredContacts : contacts}
          onSubmit={this.deleteContact}
        ></Contacts>
      </>
    );
  }
}

export default App;
