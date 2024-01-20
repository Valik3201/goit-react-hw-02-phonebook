export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <Item
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

const Item = ({ contact, onDeleteContact }) => {
  return (
    <li>
      <span>{contact.name}: </span> <span>{contact.number}</span>
      <button type="button" onClick={() => onDeleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
};

ContactList.Item = Item;
