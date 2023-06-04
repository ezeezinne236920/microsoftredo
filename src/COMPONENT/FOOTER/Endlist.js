import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./Endlist.module.css";
import { GiWorld } from "react-icons/gi";

const SoftwareData = [
  { name: "Account Profile", title: "Microsoft Store" },
  { name: "Return " },
  { name: "Order Tracking" },
];
const PC = [
  { name: "Microsoft Education", title: "Education" },
  { name: "Devices for Education" },
  { name: "Microsoft teams for Education" },
  { name: "Microsoft 365 Education" },
  { name: "Office Education" },
  { name: "Microsoft teams for Education" },
  { name: "Microsoft 365 Education" },
  { name: "Office Education" },
];
const Entertainment = [
  { name: "PC games", title: "Business" },
  { name: "Microsoft teams for Education" },
  { name: "Microsoft 365 Education" },
  { name: "Office Education" },
  { name: "Microsoft teams for Education" },
  { name: "Microsoft 365 Education" },
  { name: "Office Education" },
  { name: "Microsoft Team" },
];
const Business = [
  { name: "Contact Microsoft" },
  { name: "Privacy" },
  { name: "Terms of use" },
  { name: "trademarks" },
  { name: "About our ads" },
  { name: "Microsoft 2023" },
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
  { name: "Microsoft Cloud", title: "Company" },
  { name: "AI" },
  { name: "One Drive" },
  { name: "Skype" },
  { name: "One Note" },
];

const Endlist = () => {
  const [softWare, setSoftWare] = useState(SoftwareData);
  const [other, setOther] = useState(Other);
  const [entertainment, setEntertainment] = useState(Entertainment);
  const [business, setBusiness] = useState(Business);
  const [pc, setPc] = useState(PC);
  const [developer, setDeveloper] = useState(Developer);

  return (
    <p className={styles.footerparagraph}>
      <Card className={styles.endlist}>
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
      </Card>
      <Card>
        <footer>
          <div className={styles.fdiv}>
           
            <span> <GiWorld /> English(Nigeria)</span>
            <div>Your privacy choices</div>
          </div>
          <div className={styles.footer}>
            {Business.map((item, index) => {
              return (
                <ul key={index}>
                  <li>
                    <a href="#">{item.name}</a>
                  </li>
                </ul>
              );
            })}
          </div>
        </footer>
      </Card>
    </p>
  );
};

export default Endlist;
