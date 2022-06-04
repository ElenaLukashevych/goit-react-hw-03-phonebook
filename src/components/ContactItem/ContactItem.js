import PropTypes from 'prop-types';
import s from './ContactItem.module.css';



function ContactItem({ name, number, id, deleteContact }) {
    return (
        <li className={s.item}><p>{ name }: { number }</p> <button className={s.button} onClick={() => deleteContact(id)} type="button">Delete</button></li>
    )
    
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
}

export default ContactItem;