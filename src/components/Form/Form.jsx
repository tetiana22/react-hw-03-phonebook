import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Input, Label, Button } from "./Form.styled";

export class FormAddContact extends Component  {
  state = {
    name: '',
    number: '',
  }

  nameInputId = nanoid();
  numberInputId = nanoid();

  
  
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addContact({
      name: this.state.name, number: this.state.number
    })
    this.reset();
  }

  reset = () => {
    this.setState({ number: '', name: '' });
  };
  
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameInputId}>Name</Label>
        <Input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor={this.numberInputId}>Number</Label>
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        

        <Button type="submit">Add contact</Button>
      </Form>
    )
  }
}