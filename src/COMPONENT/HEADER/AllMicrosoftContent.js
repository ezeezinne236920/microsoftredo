import React, { useState, useContext } from "react";
import AuthContext from "../STORE/AuthContext";
import styles from "./AllMicrosoft.module.css";
import { BiChevronDown, BiSearch, BiCart, BiUserCircle } from "react-icons/bi";

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

const AllMicrosoftContent = () => {
  const [softWare, setSoftWare] = useState(SoftwareData);
  const [other, setOther] = useState(Other);
  const [entertainment, setEntertainment] = useState(Entertainment);
  const [business, setBusiness] = useState(Business);
  const [pc, setPc] = useState(PC);
  const [developer, setDeveloper] = useState(Developer);

  const ctx = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(ctx.isVisible);
  const [toggle, setToggle] = useState(false);
  return (
    <div className={styles.nomediaflex}>
      <div className={styles.nomediaflex}>
        <div>
          {SoftwareData.map((item, index) => {
            return (
              <ul key={index}>
                <h4>{item.title}</h4>
                <li>
                  <a href="#">{item.name}</a>
                </li>
              </ul>
            );
          })}
        </div>
        <div>
          {PC.map((item, index) => {
            return (
              <ul key={index}>
                <h4>{item.title}</h4>
                <li>
                  <a href="#">{item.name}</a>
                </li>
              </ul>
            );
          })}
        </div>
        <div>
          {Entertainment.map((item, index) => {
            return (
              <ul key={index}>
                <h4>{item.title}</h4>
                <li>
                  <a href="#">{item.name}</a>
                </li>
              </ul>
            );
          })}
        </div>
        <div>
          {Business.map((item, index) => {
            return (
              <ul key={index}>
                <h4>{item.title}</h4>
                <li>
                  <a href="#">{item.name}</a>
                </li>
              </ul>
            );
          })}
        </div>
        <div>
          {Developer.map((item, index) => {
            return (
              <ul key={index}>
                <h4>{item.title}</h4>
                <li>
                  <a href="#">{item.name}</a>
                </li>
              </ul>
            );
          })}
        </div>
        <div>
          {Other.map((item, index) => {
            return (
              <ul key={index}>
                <h4>{item.title}</h4>
                <li>
                  <a href="#">{item.name}</a>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllMicrosoftContent;
