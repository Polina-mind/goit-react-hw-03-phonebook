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

    if (nextContacts !== prevContacts) {
      console.log('Обновилось поле contacts, записываю contacts в хранилище');
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }

    // if (
    //   nextContacts.length > prevContacts.length &&
    //   prevContacts.length !== 0
    // ) {
    //   this.toggleModal();
    // }
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

    const newContacts = this.state.contacts.filter(
      contact => contact.id !== id,
    );

    this.setState({
      contacts: [...newContacts],
    });
  };

  onInputFilter = event => {
    const filterInputValue = event.currentTarget.value;
    const allContacts = this.state.contacts;
    console.log(allContacts);

    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterInputValue),
    );

    this.setState({ filteredContacts: [...filteredContacts] });
  };

  render() {
    const { contacts, filteredContacts, name } = this.state;
    console.log(contacts);

    return (
      <>
        <h2 className="Title">Phonebook</h2>

        <Form onSubmit={this.addContact}></Form>

        <h2 className="Title">Contacts</h2>

        <Filter onInputFilter={this.onInputFilter}></Filter>

        <Contacts
          contacts={contacts}
          filteredContacts={filteredContacts}
          name={name}
          onSubmit={this.deleteContact}
        ></Contacts>
      </>
    );
  }
}

export default App;
