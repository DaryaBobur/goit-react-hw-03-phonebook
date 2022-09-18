import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactsForm/ContactsForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import { ContainerApp, Title, Subtitle } from './AppStyled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

componentDidMount() {

  const contacts = localStorage.getItem('contacts');
  const parsedContactsList = JSON.parse(contacts);

  if(parsedContactsList) {
    this.setState({ contacts: parsedContactsList });
  }
}


componentDidUpdate(_, prevState) {
  const nextContacts = this.state.contacts;
  const prevContacts = prevState.contacts;

  if(nextContacts !== prevContacts) {
    localStorage.setItem('contacts', JSON.stringify(nextContacts))
  }
}

  addContact = (data) => {
    if(this.duplicateName(data)) {
      return alert(`${data.name} is already in contacts!`)
    }

    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    }
   
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }))
  }

  removeContact = (id) => {
    this.setState((prevState) => {
        const updateContacts = prevState.contacts.filter((contact) => contact.id !== id);

        return {
            contacts: updateContacts
        }
    })
  }

  filterNamesContacts = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
 
    if(!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const normalizedName = name.toLocaleLowerCase();
      return normalizedName.includes(normalizedFilter);
    })
    return filteredContacts;
    
  };

  duplicateName({name}) {
    const { contacts } = this.state;
    return contacts.find((contact) => contact.name === name);
  }

 render() {
  return (
    <ContainerApp>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={this.addContact}/>

      <Subtitle>Contacts</Subtitle>

      <Filter 
        value={this.state.filter} 
        onChange={this.filterNamesContacts}
      />

      <ContactsList 
        contacts={this.getFilteredContacts()} 
        removeContact={this.removeContact}
      />

    </ContainerApp>
  )
};
}

export default App;