import React from "react";
import styles from "./Appointment.module.css";
import { FaRegCalendarAlt } from "react-icons/fa";
const Appointment = () => {
  return (
    <div className={styles.container}>
     <button> <div className={styles.card}>
        <div className={styles.text}>
          <p>Görüş təyin edin</p>
        </div>
        <div className={styles.iconBox}>
            <FaRegCalendarAlt size={55} color='white'  />
        </div>
      </div></button>
    </div>
  );
};

export default Appointment;
