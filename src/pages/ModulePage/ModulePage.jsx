import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { modulesArr } from "../../dummy_data";

import styles from "./ModulePage.module.css";

import searchIcon from "../../assets/search.svg";
import homeIcon from "../../assets/home.svg";
import TabsCard from "../../components/TabsCard";

const ModulePage = () => {
  const [module, setModule] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const moduleData =
      modulesArr.find((item) => item.id === Number(id)) || null;
    if (moduleData) setModule(moduleData);
  }, [id]);

  return (
    <>
      <img
        src={homeIcon}
        alt=""
        className={styles["home-icon"]}
        onClick={goBack}
      />
      <div className={styles["header"]}>
        {module && <div className={styles["header-l"]}>{module.name}</div>}
        <div className={styles["header-r"]}>
          <img src={searchIcon} alt="" className={styles["search-icn"]} />
        </div>
      </div>

      <TabsCard />
    </>
  );
};
export default ModulePage;
