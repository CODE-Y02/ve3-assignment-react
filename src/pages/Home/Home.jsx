import { useEffect, useState } from "react";

import { Outlet, useLocation, useNavigate } from "react-router-dom";

import GoBackBtn from "../../components/GoBackBtn";

import styles from "./Home.module.css";

import heroImg from "../../assets/programing.svg";

const Home = () => {
  const [showModuleList, setShowModuleList] = useState(false);
  const loc = useLocation();

  useEffect(() => {
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
    <div className={styles.home}>
      {showModuleList && <GoBackBtn goBack={goBack} />}
      <div className={styles.heroImgWrap}>
        <img src={heroImg} alt="hero img" className={styles.heroImg} />
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
    </div>
  );
};
export default Home;
