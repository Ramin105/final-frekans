import React from "react";
import styles from "./Specialties.module.css";
import { FaHeartbeat } from "react-icons/fa";
import { Link } from 'react-router'
const Specialties = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}><h1 style={{color:'#1F2B6C'}}>Sahələrimiz</h1></div>
      <div className={styles.cards}>
        <Link className={styles.link}>
        <div className={styles.card}>
            <FaHeartbeat color="#159EEC" size={35}/>
            Nevrologiya
        </div>
        </Link>
        <Link className={styles.link}>
        <div className={styles.card}>
            <FaHeartbeat color="#159EEC" size={35}/>
            Nevrologiya
        </div>
        </Link>
        <Link className={styles.link}>
        <div className={styles.card}>
            <FaHeartbeat color="#159EEC" size={35}/>
            Nevrologiya
        </div>
        </Link>
        <Link className={styles.link}>
        <div className={styles.card}>
            <FaHeartbeat color="#159EEC" size={35}/>
            Nevrologiya
        </div>
        </Link>
        <Link className={styles.link}>
        <div className={styles.card}>
            <FaHeartbeat color="#159EEC" size={35}/>
            Nevrologiya
        </div>
        </Link>
        <Link className={styles.link}>
        <div className={styles.card}>
            <FaHeartbeat color="#159EEC" size={35}/>
            Nevrologiya
        </div>
        </Link>
        <Link className={styles.link}>
        <div className={styles.card}>
            <FaHeartbeat color="#159EEC" size={35}/>
            Nevrologiya
        </div>
        </Link>
        <Link className={styles.link}>
        <div className={styles.card}>
            <FaHeartbeat color="#159EEC" size={35}/>
            Nevrologiya
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Specialties;
