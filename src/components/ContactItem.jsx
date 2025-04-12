import React from "react";

function ContactItem({ contact, onDelete }) {
  return (
    <li>
      {contact.name}: {contact.number}{" "}
      <button onClick={() => onDelete(contact.id)}>Видалити</button>
    </li>
  );
}

export default ContactItem;
