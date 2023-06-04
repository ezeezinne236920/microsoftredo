import React, { useState, useContext } from "react";
import AuthContext from "../STORE/AuthContext";
import styles from "./SecondList.module.css";
import { BiChevronDown, BiSearch, BiCart, BiUserCircle } from "react-icons/bi";
import AllMicrosoftContent from "./AllMicrosoftContent";
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

const SecondList = () => {
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
    <div>
      <section>
        <div className={styles.secondList}>
          <div>
            <label
              htmlFor="Software"
              className={styles.nomediaquery}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              All Microsoft <BiChevronDown />
            </label>
          </div>
          <div className={styles.menuicons}>
            <span>
              <BiSearch className={styles.firstChild}/>
            </span>
            <span>
              <BiCart />
            </span>
            <span>
              <BiUserCircle />
            </span>
          </div>
        </div>
        {/* <AllMicrosoftContent/> */}
        {toggle && (
          <AllMicrosoftContent/>
         )}
      </section>
    </div>
  );
};

export default SecondList;
