import homeIcon from "../assets/home.svg";

import styles from "./GoBackBtn.module.css";
const GoBackBtn = ({ goBack }) => {
  // cb -> is callback and location can be path

  return (
    <img
      src={homeIcon}
      alt=""
      className={styles["home-icon"]}
      onClick={goBack}
    />
  );
};
export default GoBackBtn;
