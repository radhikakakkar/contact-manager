import { useState } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';

function App() {

  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    // setContacts(contacts => [...contacts, contact]);
    // setContacts(contact);
    contacts.push(contact);
    // setContacts(contact);
    // setContacts([contact]);
  }
    
  return ( 
    <div>
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
