import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import css from './Contact.module.css';

export default function Contact({ contact: { id, name, number }, onDelete }) {
    return (
        <div className={css.contact__wrapper}>
            <div className={css.contact__data}>
                <p><span><FaUser /></span>{name}</p>
                <p><span><FaPhoneAlt /></span>{number}</p>
            </div>
            <button type="button" onClick={() => { onDelete(id) }}>Delete</button>
        </div>
    );
}