import { useState } from "react";
import ModuleList from "../../components/ModuleList";
import styles from "./Home.module.css";
import heroImg from "../../assets/programing.svg";
import blobImg from "../../assets/blob.svg";
const Home = () => {
  const [showModuleList, setShowModuleList] = useState(false);

  const showModuleListHandler = (e) => {
    e.preventDefault();
    setShowModuleList(true);
  };
  return (
    <>
      <div className={styles.heroImgWrap}>
        <img src={heroImg} alt="hero img" className={styles.heroImg} />
        <img src={blobImg} alt="" />
      </div>

      <div className={styles["wrapper"]}>
        {!showModuleList && (
          <div className={styles["info-box"]}>
            <h2>Heading</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              quidem, mollitia, id, labore illo dicta neque accusamus laboriosam
              dolorem asperiores rerum impedit magni rem molestiae.
            </p>
          </div>
        )}

        {showModuleList && <ModuleList />}

        <button onClick={showModuleListHandler} disabled={showModuleList}>
          {showModuleList ? "Select Module" : "Click Here To Continue"}
        </button>
      </div>
    </>
  );
};
export default Home;
