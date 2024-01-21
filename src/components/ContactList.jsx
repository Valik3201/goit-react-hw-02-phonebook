import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export const ContactList = ({ contacts, onDeleteContact }) => {
  const sortedContacts = contacts.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <ListGroup as="ul">
      {sortedContacts.map(contact => (
        <Item
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ListGroup>
  );
};

const Item = ({ contact, onDeleteContact }) => {
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="fw-bold">{contact.name}</div>

      <div className="ms-4 me-auto">{contact.number}</div>

      <Button
        variant="outline-danger"
        size="sm"
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </Button>
    </ListGroup.Item>
  );
};

ContactList.Item = Item;
