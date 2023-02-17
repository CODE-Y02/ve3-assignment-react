import { useState } from "react";
import styles from "./TabsCard.module.css";

const TabsCard = ({ tabsData }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const toggleTab = (idx) => {
    setActiveIdx(idx);
  };

  return (
    <div className={styles.tabsWrapper}>
      <div className={styles.tabs}>
        <div
          onClick={() => {
            toggleTab(0);
          }}
          className={`${activeIdx === 0 ? styles["active"] : ""} ${
            styles.tabSelect
          }`}
        >
          {tabsData[0].title || "Tab 1"}
        </div>
        <div
          onClick={() => {
            toggleTab(1);
          }}
          className={`${activeIdx === 1 && styles.active}  ${styles.tabSelect}`}
        >
          {tabsData[1].title || "Tab 2"}
        </div>
        <div
          onClick={() => {
            toggleTab(2);
          }}
          className={`${activeIdx === 2 && styles.active}  ${styles.tabSelect}`}
        >
          {tabsData[2].title || "Tab 3"}
        </div>
      </div>

      <div className={styles.tabData}>
        <img src={tabsData[activeIdx].imageUrl} alt={""} />
        <div className={styles.data}>
          <h3> Lorem, ipsum dolor.tab - {activeIdx + 1} </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Tenetur voluptate laudantium eligendi. Quasi, maxime minima.
          </p>
        </div>
      </div>
    </div>
  );
};
export default TabsCard;
