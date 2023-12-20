import { Component } from "react";
import { nanoid } from "nanoid";
import { FormAddContact } from "./Form/Form";

import { Section } from "./Section/Section";
import { Filter } from "./Filter/Filter";
import { Container, Wrapper } from "./App.styled";
import { ContactsList } from "./ContactList/ContactList";

export class App extends Component {
  state = {
    contacts: [
     
    ],
    filter: '',
  };
  
  componentDidMount() {
    if (localStorage.getItem('contacts'))
        this.setState({
          contacts: JSON.parse(localStorage.getItem('contacts'))
        })
  }


  componentDidUpdate(_, prevState) {
      if(prevState.contacts !== this.state.contacts) {
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
        
      }
     
  }
  addContact = contact => {
    const isInContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
    }));
    
  };


  onDelete = id => {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== id)
      }))
  }

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    if (filter) {
      return contacts.filter(contact => contact.name.includes(filter));
    }
    return contacts;
  };


  handleChange = (evt) => {
    this.setState({ filter: evt.target.value });
  };

  render() {
    const { filter } = this.state;
    
    
    return (
      <Container>
        <Section title="Phonebook">
          <FormAddContact addContact={this.addContact} />
        </Section>
        <Section title="Contacts"></Section>
        {this.state.contacts.length > 0 ? (
          <Filter value={filter} onChange={this.handleChange} />
          ) : (
            <Wrapper>Your phonebook is empty. Add first contact!</Wrapper>
        )}
        {this.state.contacts.length > 0 && (
           <ContactsList
           contacts={this.getFilteredContacts()}
           deleteContact={this.onDelete}
       />
          )}
        
        
      </Container>
    );
  }
}