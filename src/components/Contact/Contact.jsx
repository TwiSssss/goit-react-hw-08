import { FaUser, FaPhone } from "react-icons/fa";
import style from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { onDelete } from "../../redux/contacts/operations";

const Contact = ({ id, number, name }) => {
    const dispatch = useDispatch();
    const deleteUsers = () => {
        dispatch(onDelete(id));
    };
    return (
        <li className={style.contactItem}>
            <div className={style.contactInfo}>
                <p className={style.contactName}>
                    <FaUser /> {name}
                </p>
                <p className={style.contactNumber}>
                    <FaPhone /> {number}
                </p>
            </div>
            <button className={style.deleteButton} onClick={deleteUsers}>
                Delete
            </button>
        </li>
    );
};

export default Contact;
