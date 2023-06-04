import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import styles from "./Social.module.css";
import Card from "../UI/Card";
const Social = () => {
  return (
    <Card>
      <div className={styles.Social}>
        <p>Follow Microsoft</p>
        <div>
          <BsTwitter />
          <span>
            {" "}
            <BsLinkedin />
          </span>
        </div>
      </div>
    </Card>
  );
};

export default Social;
