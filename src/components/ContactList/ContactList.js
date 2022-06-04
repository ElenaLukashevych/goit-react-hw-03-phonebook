import PropTypes from 'prop-types';
import ContactItem from "components/ContactItem";
import s from './ContactList.module.css';


function ContactList({ contacts, deleteContact }) {
    return (
        <ul className={s.list}>
            {contacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    deleteContact={deleteContact}
                />
           ))} 
            </ul>
        )
    
  
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
    ),
    deleteContact: PropTypes.func.isRequired,
    
}

export default ContactList;