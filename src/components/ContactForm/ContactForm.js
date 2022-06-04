import React, { Component } from "react";
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';


class ContactForm extends Component {
    state = {
  name: '',
  number: '',
  }

     handleInputChange = (event) => {
       const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    })
  }

  hanleSubmit = (event) => {
      event.preventDefault();
      this.props.onSubmit(this.state);
      this.reset();
    }
    
    reset = () => {
        this.setState({
            name: '',
            number: '',
        })
    }

    render() {
      return (
          
            <form className={s.form} onSubmit={this.hanleSubmit}>
        <label>
          Name
            <input
              placeholder="Lenka"
              className={s.input}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label>
            Number
            <input
              placeholder="0636909298"
              className={s.input}
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button className={s.button} type="submit">Add contact</button>
            </form>
        )
    }

};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;