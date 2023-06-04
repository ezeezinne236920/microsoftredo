import React, { useState } from "react";
import styles from "./Aftergridsection.module.css";
import { Buttonwithoutcolor, Button } from "../UI/Button";
import Card from "../UI/Card";
const AfterGridSection = () => {
  return (
    <Card className={styles.AfterGridSection}>
      <div className={styles.sectionbg}>
        <div className={styles.maindiv}>
          <h2>Outlook for iOS and Android</h2>
          <p>Connect,Organize. Get things done</p>
          <div className={styles.sectionbtn}>
            <Button>Download now</Button> 
          </div>

          <div></div>
        </div>
      </div>
    </Card>
  );
};

export default AfterGridSection;
