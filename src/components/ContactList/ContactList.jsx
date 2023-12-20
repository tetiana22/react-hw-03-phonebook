import { ListOfContact, ContactItem } from './ContactList.styled';

export const ContactsList = ({ contacts, deleteContact }) => {
    return (
        <ListOfContact>
            {contacts.map(contact => (
                <ContactItem key={contact.id}>
                    {contact.name}: {contact.number}
                    <button
                        type="button"
                        onClick={() => deleteContact(contact.id)}
                    >
                        Delete
                    </button>
                </ContactItem>
            ))}
        </ListOfContact>
    );
};