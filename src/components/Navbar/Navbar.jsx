import React from "react";
import Button from "../Buttons/Button";
import styles from "./Navbar.module.css";
import { ReactComponent as Logo } from "../Assets/Logo.svg";

const navItems = ["Home", "Attorneys", "Practice Areas", "About Us"];

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.listItemWrapper}>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.btnContainer}>
        <Button/>
      </div>
    </div>
  );
};

export default Navbar;
