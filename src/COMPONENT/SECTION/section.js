import React, { useState } from "react";
import styles from "./section.module.css";
import SectionImage from "../imegiz/background.jpeg";
import { Buttonwithoutcolor, Button } from "../UI/Button";
const section = () => {
  return (
    <div>
      <div className={styles.sectionbg}>
        <div className={styles.maindiv}>
          <h2>Microsoft 365</h2>
          <p>
            Turn your ideas into reality, stay safer online and off, and focus
            on what matters most with Microsoft 365 apps
          </p>
          <div className={styles.sectionbtn}>
            <Button>For 1 person</Button>{" "}
            <Buttonwithoutcolor className={styles.sectionbtn}>
              For up to 6 people
            </Buttonwithoutcolor>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default section;
