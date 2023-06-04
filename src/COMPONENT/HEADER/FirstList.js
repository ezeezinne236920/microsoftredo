import React, { useState } from "react";
import styles from "./FirstList.module.css";
const Data = [
  { name: "Microsoft365" },
  { name: "Office" },
  { name: "Windows" },
  { name: "Xbox" },
  { name: "Support" },
];
const FirstList = () => {
  const [firstList, setFirstList] = useState(Data);
  return (
    <ul className={styles.firstul}>
      {firstList.map((items, index) => (
        <li key={index}>
          <a href="#">{items.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default FirstList;
