import { memo, useCallback, useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Loading from "../../components/Loading";
import TabsCard from "../../components/TabsCard";
import GoBackBtn from "../../components/GoBackBtn";

import styles from "./ModulePage.module.css";
import searchIcon from "../../assets/search.svg";

const ModulePage = () => {
  const [module, setModule] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchModule = useCallback(async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/module/${id}`
      );

      setModule(res.data);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    fetchModule();
  }, [fetchModule]);

  const goBack = (e) => {
    e.preventDefault();
    navigate("/list");
  };

  return (
    <div className={styles.modulePageWrap}>
      <GoBackBtn goBack={goBack} />
      <div className={styles["header"]}>
        {module && <div className={styles["header-l"]}>{module.name}</div>}
        <div className={styles["header-r"]}>
          <Link to={"/search"}>
            <img
              src={searchIcon}
              alt="search btn"
              className={styles["search-icn"]}
            />
          </Link>
        </div>
      </div>

      {module && <TabsCard tabsData={module.data} />}
      {!module && <Loading />}
    </div>
  );
};
export default memo(ModulePage);
