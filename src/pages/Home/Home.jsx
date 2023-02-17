import { useEffect, useState } from "react";

import styles from "./Home.module.css";
import heroImg from "../../assets/programing.svg";
import blobImg from "../../assets/blob.svg";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import GoBackBtn from "../../components/GoBackBtn";
const Home = () => {
  const [showModuleList, setShowModuleList] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    // console.log("use Eff", showModuleList);
    // console.log("use Eff", loc.pathname);
    if (loc.pathname === "/list") {
      setShowModuleList(true);
    } else {
      setShowModuleList(false);
    }
  }, [loc]);

  const navigate = useNavigate();
  const showModuleListHandler = (e) => {
    e.preventDefault();
    setShowModuleList(true);
    navigate("/list");
  };

  const goBack = (e) => {
    e.preventDefault();
    setShowModuleList(false);
    navigate("/");
  };
  return (
    <>
      {showModuleList && <GoBackBtn goBack={goBack} />}
      <div className={styles.heroImgWrap}>
        <img src={heroImg} alt="hero img" className={styles.heroImg} />
        <img src={blobImg} alt="" />
      </div>

      <div className={styles["wrapper"]}>
        <Outlet />

        <button
          className={`${styles.btn}`}
          onClick={showModuleListHandler}
          disabled={showModuleList}
        >
          {showModuleList ? "Select Module" : "Click Here To Continue"}
        </button>
      </div>
    </>
  );
};
export default Home;
