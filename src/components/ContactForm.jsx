import React, { useState } from 'react';

function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact(name.trim(), number.trim());
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid black', padding: '10px', marginBottom: '20px' }}>
      <div>
        <label>
          Ім’я:
          <input
            type="text"
            name="name"
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Ім’я може містити лише літери, апостроф, тире та пробіли."
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Номер:
          <input
            type="tel"
            name="number"
            required
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер має містити лише цифри, пробіли, дужки, тире та може починатися з +"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
        </label>
      </div>

      <button type="submit">Додати контакт</button>
    </form>
  );
}

export default ContactForm;
