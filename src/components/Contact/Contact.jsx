import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacsOps";
import { FaPhone, FaUser } from "react-icons/fa";
import s from "/src/components/Contact/Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={s.wrapper}>
      <span className={s.contactNumber}>
        {contact.name}: {contact.number}
      </span>
      <button className={s.formBtn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
