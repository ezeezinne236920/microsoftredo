import React, { useState } from "react";
import styles from "./Sectiongrid.module.css";
import { Buttonwithoutcolor, Button } from "../UI/Button";
import Card from "../UI/Card";
const firstGridData = [
  {
    img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-Windows11-GlobalLaunch?wid=406&hei=230&fit=crop",
    title: "Designed for life today—and tomorrow",
    Desc: "The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love.",
    btn: "See if your PC is ready",
  },
  {
    img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-MSFT-CP-Edge?wid=406&hei=230&fit=crop",
    title: "Microsoft Edge",
    Desc: "World-class performance with more privacy, more productivity, and more value while you browse.",
    btn: "Download now",
  },
  {
    img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Soft-CP-OneDriveCampaignRefresh-2?wid=380&hei=213&fit=crop",
    title: "Microsoft OneDrive",
    Desc: "Save your files and photos to OneDrive and access them from any device, anywhere.",
    btn: "Learn more",
  },
  {
    img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-Microsoft-Teams-Commercial?wid=406&hei=230&fit=crop",
    title: "OneNote",
    Desc: "Organize your notes and your life.",
    btn: "Learn more",
  },
];

export const Sectiongrid = (props) => {
  const [firstData, setFirstData] = useState(firstGridData);
  return (
    <Card className={styles.displayGrid}>
      {firstData.map((item, index) => {
        return (
          <main key={index}>
            <div>
              <img src={item.img} />
            </div>
            {/* <h4>{item.title}</h4> */}
            <h1>{item.title}</h1>
            <p>{item.Desc}</p>
            <span>
              <Buttonwithoutcolor className={styles.cardbtn}>
                {item.btn}
              </Buttonwithoutcolor>
            </span>
          </main>
        );
      })}
    </Card>
  );
};

const SecondGridData = [
  {
    img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-365-For-Business-Woman-Teams-Call?wid=406&hei=230&fit=crop",
    title: "Try Microsoft 365 for free",
    Desc: " Get Microsoft Teams, secure cloud storage, and premium apps across devices with a free one-month Microsoft 365 Business Standard trial",
    btn: "Start your free trial",
  },
  {
    img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-Microsoft-Teams-Commercial?wid=406&hei=230&fit=crop",
    title: "Get Microsoft Teams for free",
    Desc: "Online meetings, chat, and shared cloud storage—all in one place.",
    btn: "Sign up for free",
  },
  {
    img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/JIC-DPS-CP01?wid=406&hei=230&fit=crop",
    title: "Welcome to your Windows 365 Cloud PC",
    Desc: "Securely stream your Windows experience from the Microsoft cloud to any device.",
    btn: "Get it today",
  },
  {
    img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-Viva-Renata-Empower?wid=380&hei=213&fit=crop",
    title: "Empower people and teams with Microsoft Viva",
    Desc: "Bring together connection, purpose, insight, and growth with the first employee experience platform built for the hybrid era",
    btn: " Learn more abiut Microsoft Viva ",
  },
];

export const SecondGrid = (props) => {
  const [secondData, setSecondData] = useState(SecondGridData);
  return (
    <Card>
      <h1 className={styles.forbusiness}>For Business</h1>
      <div className={styles.displayGrid}>
        {secondData.map((item, index) => {
          return (
            <main key={index}>
              <div>
                <img src={item.img} />
              </div>
              <h2>{item.title}</h2>
              <p>{item.Desc}</p>
              <span>
                <Buttonwithoutcolor className={styles.cardbtn}>
                  {item.btn}
                </Buttonwithoutcolor>
              </span>
            </main>
          );
        })}
      </div>
    </Card>
  );
};
