import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import styles from "./ModuleList.module.css";

// import { availableModules } from "../dummy_data";

const ModuleList = () => {
  const [modulesList, setModulesList] = useState([]);

  const fetchModuleList = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/list`);
      // console.log(res);
      const { modules } = res.data;
      setModulesList(modules);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchModuleList();
  }, []);

  return (
    <div className={styles["available-modules"]}>
      {modulesList.map((module) => (
        <Link to={`/module/${module._id}`} key={module._id}>
          {module.name}
        </Link>
      ))}

      {modulesList.length === 0 && <Loading />}
    </div>
  );
};
export default ModuleList;
