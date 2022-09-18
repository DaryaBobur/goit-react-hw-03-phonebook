import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './ContactsFormStyled';
 

class ContactForm extends Component {
    state = {
      name: '',
      number: '',
    }

   userInputId = nanoid();

    handleChange = evt => {
      const { name, value } = evt.target;
      this.setState({ [name]: value });
    };
    
      handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state);
        this.resetForm();
      };

      resetForm = () => {
        this.setState({name: '', number: ''});
      }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor='htmlFor={this.userInputId}'>Name
            <input 
            type="text"
            name="name"
            id={this.userInputId}
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            /> 
        </label>

        <label htmlFor="{this.userInputId}">Number
          <input
            type="tel"
            name="number"
            id={this.userInputId}
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    );
  }
}


export default ContactForm;