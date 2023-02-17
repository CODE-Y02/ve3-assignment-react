import { memo, useCallback, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";

// import { modulesArr } from "../../dummy_data";

import Loading from "../../components/Loading";

import styles from "./ModulePage.module.css";

import searchIcon from "../../assets/search.svg";

import TabsCard from "../../components/TabsCard";
import GoBackBtn from "../../components/GoBackBtn";
import axios from "axios";

const ModulePage = () => {
  const [module, setModule] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchModule = useCallback(async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/module/${id}`
      );
      console.log(res);

      setModule(res.data);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    fetchModule();
  }, [fetchModule]);

  console.log(module);

  const goBack = (e) => {
    e.preventDefault();
    navigate("/list");
  };
  return (
    <>
      <GoBackBtn goBack={goBack} />
      <div className={styles["header"]}>
        {module && <div className={styles["header-l"]}>{module.name}</div>}
        <div className={styles["header-r"]}>
          <img src={searchIcon} alt="" className={styles["search-icn"]} />
        </div>
      </div>

      {module && <TabsCard tabsData={module.data} />}
      {!module && <Loading />}
    </>
  );
};
export default memo(ModulePage);
