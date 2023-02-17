import "./Search.css";
import { posts } from "../../dummy_data";
import GoBackBtn from "../../components/GoBackBtn";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="searchPage">
      <GoBackBtn goBack={goBack} />
      <form>
        <label htmlFor="searchInput">Type here to search</label>
        <input type="text" id="searchInput" placeholder="Search Posts" />
      </form>
      <p className="result-nos">Showing 5 results ...</p>
      <div className="results-wrap">
        {posts.map((post, idx) => {
          return (
            <div className="result" key={idx}>
              <img src={post.src} alt={post.alt} />
              <div className="resultinfo">
                <h4>{post.title}</h4>
                <p>{post.description}</p>
              </div>
            </div>
          );
        })}

        <div className="controls">
          <span className="previous"> previous </span>
          <span className="next"> next </span>
        </div>
      </div>
    </div>
  );
};
export default Search;
