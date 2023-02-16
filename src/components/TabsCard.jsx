import { useState } from "react";
import "./TabsCard.css";

const TabsCard = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="tabsWrapper">
      <div className="tabs">
        <div
          onClick={() => {
            setActiveTab(1);
          }}
          className={`${activeTab === 1 ? "active" : ""}  tabSelect`}
        >
          Tab1
        </div>
        <div
          onClick={() => {
            setActiveTab(2);
          }}
          className={`${activeTab === 2 && "active"}  tabSelect`}
        >
          Tab2
        </div>
        <div
          onClick={() => {
            setActiveTab(3);
          }}
          className={`${activeTab === 3 && "active"}  tabSelect`}
        >
          Tab3
        </div>
      </div>

      <div className="tabData">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Bookshelf.jpg/320px-Bookshelf.jpg"
          alt=""
        />
        <div className="data">
          <h3> Lorem, ipsum dolor.tab - {activeTab} </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Tenetur voluptate laudantium eligendi. Quasi, maxime minima.
          </p>
        </div>
      </div>
    </div>
  );
};
export default TabsCard;
