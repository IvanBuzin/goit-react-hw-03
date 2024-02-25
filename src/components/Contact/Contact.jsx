import { FaPhoneAlt, FaUser } from "react-icons/fa";
import css from "./Contact.module.css";

export const Contact = ({ contacts: { name, number, id }, onDelete }) => {
  const formatNumber = (inputNumber) => {
    const pattern = /(\d{3})(\d{2})(\d{2})/;
    const formatedNumber = inputNumber.replase(pattern, "$1-$2-$3");
    return formatNumber;
  };
  return (
    <div className={css.item}>
      <div className={css.paragraph}>
        <p>
          <FaUser className={css.icon} />
          {name}
        </p>
      </div>
      <button className={css.button} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
