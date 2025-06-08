import React from "react";
import styles from "./Header.module.css";
import { LuPhoneCall } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { GoLocation } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router";
const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.headerOne}>
        <div className={styles.oneContainer}>
            <div className={styles.logo}>
                <h2>FRE<span>KANS</span></h2>
            </div>
            <div className={styles.icons}>
                <div className={styles.iconbox}>
                    <LuPhoneCall size={33} color="55B9F1"  />
                    <div className={styles.textBox}>
                        <h3>Təcili</h3>
                        <p>+994(70) 635-56-65</p>
                    </div>
                </div>
                <div className={styles.iconbox}>
                    <FaRegClock size={33} color="55B9F1"/>
                    <div className={styles.textBox}>
                        <h3>İş saatı</h3>
                        <p>09:00-19:00</p>
                    </div>
                </div>
                <div className={styles.iconbox}>
                    <GoLocation size={33} color="55B9F1"/>
                    <div className={styles.textBox}>
                        <h3>İş saatı</h3>
                        <p>09:00-19:00</p>
                    </div>
                </div>
            </div>
        </div>
      </header>
      <header className={styles.headerTwo}>
        <div className={styles.twoContainer}>
            <div className={styles.nav}>
                <Link className={styles.link} >Ana Səhifə</Link>
                <Link className={styles.link} >Haqqımızda</Link>
                <Link className={styles.link} >Xidmətlər</Link>
                <Link className={styles.link} >Həkimlər</Link>
                <Link className={styles.link} >Xəbərlər</Link>
                <Link className={styles.link} >Əlaqə</Link>
            </div>
            <div className={styles.right}>
                <CiSearch color='white' size={20}/><button>Növbə</button>
            </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
