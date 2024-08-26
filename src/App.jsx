import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import contacts from "./contacts";

import './App.css'

function App() {
   const [list, setList] = useState(getDataFromLS)
  // const [list, setList] = useState(contacts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      setList(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(list));
  }, [list]);

  const handleFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const newContact = (newItem) => {
    setList((prevList) => {
      return [...prevList, newItem];
    });
  };

  const filteredToShow = list.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = (contactId) => {
    setList((prevList) => {
      return prevList.filter((contact) => contact.id !== contactId);
    });
  };
    function getDataFromLS () {
    const storedContacts = localStorage.getItem("contacts");
    return storedContacts ? JSON.parse(storedContacts) : contacts;
  }


  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm onAdd={newContact} />
      <SearchBox value={filter} onChange={handleFilter} />
      <ContactList list={filteredToShow} onDelete={deleteContact} />
    </section>
  );
}

export default App;
