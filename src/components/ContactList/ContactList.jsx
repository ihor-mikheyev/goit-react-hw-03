import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"

export default function ContactList({ list, onDelete }) {
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.id}>
            <Contact contact={item} onDelete={onDelete}></Contact>
          </li>
        );
      })}
    </ul>
  );
}
