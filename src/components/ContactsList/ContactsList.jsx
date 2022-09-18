import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Contacts } from './ContactsListStyled';

const ContactsList = ({ contacts, removeContact }) =>{
 return (  
    <Contacts>
     {contacts.map(({name, number, id}) => 
       <li key={nanoid()}>
         <p>- {name}: {number}</p>
          <button type='button' onClick={() => removeContact(id)}>Delete</button>
       </li>)}
    </Contacts>
        )
}


ContactsList.propTypes = {
   contacts: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
  }))

}

export default ContactsList;