import React from "react";
import styles from "./WelcomeSection.module.css";
const WelcomeSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textbox}>
        <div className={styles.text}>
          <p>Həyata Qayğı</p>
          <div className={styles.h1box}>
            <h1>Tibbi Mükəmməllikdə Liderlik Edirik</h1>
          </div>
          <button>Xidmətlərimiz</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
