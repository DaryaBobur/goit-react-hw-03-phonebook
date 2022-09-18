import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactsForm/ContactsForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import { ContainerApp, Title, Subtitle } from './AppStyled';

class App extends Component {
  state = {
    contacts: [   
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  }

  // componentDidMount() {
  //   // console.log('App componentDidMount');

  //   const todos = localStorage.getItem('todos');
  //   const parsedTodos = JSON.parse(todos);

  //   if (parsedTodos) {
  //     this.setState({ todos: parsedTodos });
  //   }
  // }

componentDidMount() {
const contactsList = localStorage.getItem('contacts');
const parsedContactsList = JSON.parse(contactsList);

if(parsedContactsList) {
  this.setState({contactsList: parsedContactsList});
}

}


componentDidUpdate(_, prevState) {
  const nextContact = this.state.contacts;
  const prevContact = prevState.contacts;

  if(nextContact !== prevContact) {
    console.log('update');
    localStorage.setItem('contacts', JSON.stringify(nextContact))
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