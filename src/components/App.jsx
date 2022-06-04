import { nanoid } from 'nanoid';
import { Component } from "react";
import Container from "components/Container";
import ContactForm from 'components/ContactForm';
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import contacts from './contacts.json';


class App extends Component {
  state = {
    contacts: contacts,
    filter: '',
  };


  formSubmitHanler = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const { contacts } = this.state;
    const findContact = contacts.find(contact => contact.name === name);
    
    if (findContact) {
      return alert(contact.name + ' is already in contact')
    } else this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = (event) => {
    this.setState({
      filter: event.currentTarget.value,
    })
  };

  filteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({name}) =>
     name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
       this.setState({
      contacts: parsedContacts,
    })
    }
  }
 
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts))
  }
  }

  render() {
    const { filter } = this.state;
    const { formSubmitHanler, changeFilter, filteredContacts, deleteContact } = this;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHanler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter}/>
        <ContactList contacts={filteredContacts()} deleteContact={deleteContact}/>
      </Container>
    )
  }
};

export default App;

