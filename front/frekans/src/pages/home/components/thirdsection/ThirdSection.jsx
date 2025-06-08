import React from "react";
import styles from "./ThirdSection.module.css";
import groupImage from "../../../../assets/Group183.png"; 
const ThirdSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p className={styles.welcome}>Frekansa xoş gəlmisiniz</p>
        <h1>Ən Doğru Seçim</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci esse
          optio libero corrupti sapiente possimus illum, iusto, expedita quod
          magni, nam itaque veritatis et ipsa veniam? Distinctio alias
          temporibus minima!
        </p>
      </div>
      <div className={styles.imgbox}>
        <img src={groupImage} alt="Group 183" />

      </div>
    </div>
  );
};

export default ThirdSection;
