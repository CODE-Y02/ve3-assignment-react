import { Link } from "react-router-dom";
import styles from "./ModuleList.module.css";

import { availableModules } from "../dummy_data";

const ModuleList = () => {
  return (
    <div className={styles["available-modules"]}>
      {availableModules.map((moduleNumber) => (
        <Link to={`/module/${moduleNumber}`} key={moduleNumber}>
          Module {moduleNumber}
        </Link>
      ))}
    </div>
  );
};
export default ModuleList;
