import React from "react";
import styles from "./Doctors.module.css";
import doctorImg from "../../../../assets/Rectangle 20.png";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const Doctors = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1 style={{ color: "#1F2B6C" }}>Həkimlərimiz</h1>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.imgbox}>
            <img src={doctorImg} alt="" />
          </div>
          <div className={styles.text}>
            <p>mireliyev miri</p>
            <h3>Nevroloq</h3>
            <div className={styles.icons}>
              <FaLinkedinIn className={styles.icon} />
              <FaFacebookF className={styles.icon} />
              <FaInstagram className={styles.icon} />
            </div>
          </div>
           <button className={styles.viewbtn}>View Profile</button>
        </div>
        <div className={styles.card}>
          <div className={styles.imgbox}>
            <img src={doctorImg} alt="" />
          </div>
          <div className={styles.text}></div>
          <div className={styles.view}></div>
        </div>
        <div className={styles.card}>
          <div className={styles.imgbox}>
            <img src={doctorImg} alt="" />
          </div>
          <div className={styles.text}></div>
          <div className={styles.view}></div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
