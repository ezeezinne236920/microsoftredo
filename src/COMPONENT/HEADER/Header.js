import React, { useState, useContext } from "react";
import styles from "./Header.module.css";
import Card from "../UI/Card";
import MicrosoftLogo from "../imegiz/microsoft logo.png";
import FirstList from "./FirstList";
import SecondList from "./SecondList";
import AuthContext from "../STORE/AuthContext";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import SideBar from "./SideBar";

const Header = () => {
  const ctx = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(ctx.isVisible);
  const [toggle, setToggle] = useState(ctx.toggle);

  return (
    <Card className={styles["margin-top"]}>
      <section className={styles.mainheader}>
        <nav>
          <div className={styles.MicrosoftLogo}>
            <img src={MicrosoftLogo} alt="this is microsoft logo"></img>
          </div>
          <div className={styles.FirstList}>
            <span className={styles.menubar}>
              {isVisible ? (
                <AiOutlineMenu onClick={() => setIsVisible(!isVisible)} />
              ) : (
                <ImCancelCircle onClick={() => setIsVisible(!isVisible)} />
              )}
            </span>
            <span className={styles.listItems}>
              <FirstList />
            </span>
            <span className={styles.listItemsSidebar}>
              {isVisible ? "" : <SideBar />}
            </span>
          </div>
          <div className={styles.secondlist}>
            <SecondList />
          </div>
        </nav>
      </section>
    </Card>
  );
};

export default Header;
