import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };

    this.addContact = this.addContact.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleDeleteContact = this.handleDeleteContact.bind(this);
  }

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );

    return (
      <Container className="d-flex  justify-content-center mt-5 mb-5">
        <Row className="justify-content-md-center ">
          <Col>
            <h1>Phonebook</h1>
            <ContactForm
              addContact={this.addContact}
              contacts={this.state.contacts}
            />
            <h2>Contacts</h2>
            <Filter value={filter} onChange={this.handleFilterChange} />
            <ContactList
              contacts={filteredContacts}
              onDeleteContact={this.handleDeleteContact}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
