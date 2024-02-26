import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { nanoid } from "nanoid";

export const ContactList = ({ contactsInfo, onDelete }) => {
  return (
    <ul className={css.ContactList}>
      {contactsInfo.map((item) => (
        <li key={nanoid()} className={css.ContactListItem}>
          <Contact contacts={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
