import React from "react";
import styles from "./Button.module.css";
import { BiChevronRight } from "react-icons/bi";
// const greaterthan = ">";
export const Buttonwithoutcolor = (props) => {
  return (
    <button className={`${styles.butn} ${props.className}`}>
      <p>
        <span className={styles.cite}>{props.children}</span>
        <span ><BiChevronRight className={styles. children}/></span>
      </p>
    </button>
  );
};

export const Button = (props) => {
  return (
    <button className={`${styles.btn} ${props.className}`}>
      {props.children}
    </button>
  );
};
