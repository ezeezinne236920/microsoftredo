import React, { useState, useRef, useContext, useEffect } from "react";
import AuthContext from "../STORE/AuthContext";
import styles from "./SideBar.module.css";
import {
  BiChevronDown,
  BiChevronUp,
  BiSearch,
  BiCart,
  BiUserCircle,
} from "react-icons/bi";

const SoftwareData = [
  { name: "Windows App", title: "SoftWare" },
  { name: "AI" },
  { name: "One Drive" },
  { name: "Skype" },
  { name: "One Note" },
  { name: "Microsoft Team" },
];
const PC = [{ name: "Shop Xbox", title: "PCs & Devices" }, { name: "AI" }];
const Entertainment = [
  { name: "PC games", title: "Entertaiinment" },

  { name: "Microsoft Team" },
];
const Business = [
  { name: "Microsoft Cloud", title: "Business" },
  { name: "AI" },
  { name: "One Drive" },
  { name: "Skype" },
  { name: "One Note" },
  { name: "Microsoft Team" },
];
const Developer = [
  { name: "Developer center", title: " Developer & IT" },
  { name: "AI" },
  { name: "One Drive" },
  { name: "Skype" },
  { name: "One Note" },
  { name: "Microsoft Team" },
  { name: "Skype" },
  { name: "One Note" },
  { name: "Microsoft Team" },
];
const Other = [
  { name: "Free Downloads", title: " Other" },
  { name: "AI" },
  { name: "One Drive" },
];
const Data = [
  { name: "Microsoft365" },
  { name: "Office" },
  { name: "Windows" },
  { name: "Xbox" },
  { name: "Support" },
];
const SideBar = () => {
  const [softWare, setSoftWare] = useState(SoftwareData);
  const [other, setOther] = useState(Other);
  const [entertainment, setEntertainment] = useState(Entertainment);
  const [business, setBusiness] = useState(Business);
  const [pc, setPc] = useState(PC);
  const [developer, setDeveloper] = useState(Developer);

  const ctx = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(ctx.isVisible);
  const [toggle, setToggle] = useState(true);
  const [firstData, setFirstData] = useState(Data);
  const sidebarRef = useRef();
  useEffect(() => {
    // const sidebarRef = sidebarRef.current.getBoundingClientRect();
  }, []);
//   console.log(sidebarRef.current.getBoundingClientRect());
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarDiv}>
        <ul className={styles.firstul}>
          {firstData.map((items, index) => (
            <li key={index}>
              <a href="#">{items.name}</a>
            </li>
          ))}
        </ul>
        <div
          onClick={() => {
            setToggle(!toggle);
          }}
          className={styles.suboptionToggle}
        >
          <p>Software </p>
          <p>{toggle ? <BiChevronDown /> : <BiChevronUp />}</p>
        </div>
        {!toggle && (
          <ul className={styles.firstul } onClick={()=>{setToggle(!toggle)}}>
            {softWare.map((item, index) => (
              <li key={index} className={styles.suboptionmargin}>
                <a href="#">{item.name}</a>
              </li>
            ))}
          </ul>
        )}
        <div
          onClick={() => {
            setToggle(!toggle);
          }}
          className={styles.suboptionToggle}
        >
          <p>PCs and Devices </p>
          <p>{toggle ? <BiChevronDown /> : <BiChevronUp />}</p>
        </div>
        {!toggle && (
          <ul className={styles.firstul}>
            {pc.map((item, index) => (
              <li key={index} className={styles.suboptionmargin}>
                <a href="#">{item.name}</a>
              </li>
            ))}
          </ul>
        )}
        <div
          onClick={() => {
            setToggle(!toggle);
          }}
          className={styles.suboptionToggle}
        >
          <p>Entertainment </p>
          <p>{toggle ? <BiChevronDown /> : <BiChevronUp />}</p>
        </div>
        {!toggle && (
          <ul className={styles.firstul}>
            {entertainment.map((item, index) => (
              <li key={index} className={styles.suboptionmargin}>
                <a href="#">{item.name}</a>
              </li>
            ))}
          </ul>
        )}
        <div
          onClick={() => {
            setToggle(!toggle);
          }}
          className={styles.suboptionToggle}
        >
          <p>Business </p>
          <p>{toggle ? <BiChevronDown /> : <BiChevronUp />}</p>
        </div>
        {!toggle && (
          <ul className={styles.firstul}>
            {business.map((item, index) => (
              <li key={index} className={styles.suboptionmargin}>
                <a href="#">{item.name}</a>
              </li>
            ))}
          </ul>
        )}
        <div
          onClick={() => {
            setToggle(!toggle);
          }}
          className={styles.suboptionToggle}
        >
          <p>Developer & IT </p>
          <p>{toggle ? <BiChevronDown /> : <BiChevronUp />}</p>
        </div>
        {!toggle && (
          <ul className={styles.firstul}>
            {developer.map((item, index) => (
              <li key={index} className={styles.suboptionmargin}>
                <a href="#">{item.name}</a>
              </li>
            ))}
          </ul>
        )}
        <div
          onClick={() => {
            setToggle(!toggle);
          }}
          className={styles.suboptionToggle}
        >
          <p>Others </p>
          <p>{toggle ? <BiChevronDown /> : <BiChevronUp />}</p>
        </div>
        {!toggle && (
          <ul className={styles.firstul}>
            {other.map((item, index) => (
              <li key={index} className={styles.suboptionmargin}>
                <a href="#">{item.name}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SideBar;
