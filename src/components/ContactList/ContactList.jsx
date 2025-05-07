import style from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts, selectLoading, selectError } from "../../redux/contactsSlice";

const ContactList = () => {
    const getVisibleContacts = useSelector(selectFilteredContacts);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    return (
        <>
            {loading && !error && <p className={style.contactText}>Loading contacts...</p>}
            <ul className={style.contactList}>{getVisibleContacts.length > 0 ? getVisibleContacts.map(({ id, number, name }) => <Contact key={id} number={number} name={name} id={id} />) : <p>No contacts</p>}</ul>{" "}
        </>
    );
};

export default ContactList;
