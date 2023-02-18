import styles from "./Search.module.css";

import { posts } from "../../dummy_data";

import GoBackBtn from "../../components/GoBackBtn";

import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.searchPage}>
      <GoBackBtn goBack={goBack} />
      <form onSubmit={submitHandler}>
        <label htmlFor="searchInput">Type here to search</label>
        <input type="text" id="searchInput" placeholder="Search Posts" />
      </form>
      <p className={styles["result-nos"]}>Showing 5 results ...</p>
      <div className={styles["results-wrap"]}>
        {posts.map((post, idx) => {
          return (
            <div className={styles.result} key={idx}>
              <img src={post.src} alt={post.alt} />
              <div className={styles.resultinfo}>
                <h4>{post.title}</h4>
                <p>{post.description}</p>
              </div>
            </div>
          );
        })}

        <div className={styles.controls}>
          <span className={styles.previous}> previous </span>
          <span className={styles.previous}> next </span>
        </div>
      </div>
    </div>
  );
};
export default Search;
