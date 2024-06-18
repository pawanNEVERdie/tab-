import React, { useState, ReactElement } from "react";
import { Tabprops } from "../../types/TabTypes";
import { Tabitem } from "../../types/TabTypes";
import { sanitizeForId } from "../../utils/stringUtils";

const Tablist: React.FC<Tabprops> = ({ children, activeTabIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(activeTabIndex);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  const tabs = React.Children.toArray(children).filter(
    (child): child is ReactElement<Tabitem> => {
      return React.isValidElement(child) && child.type === Tabitem;
    }
  );

  return (
    <>
      <div className="tabs">
        <nav className="tab-list-wrapper">
          <ul className="tab-list" role="tablist" aria-orientation="horizontal">
            {tabs.map((tab, index) => (
              <li key={`tab-${index}`}>
                <button
                  key={`tab-btn-${index}`}
                  role="tab"
                  id={`tab-${sanitizeForId(tab.props.label)}`}
                  aria-controls={`panel-${sanitizeForId(tab.props.label)}`}
                  aria-selected={activeIndex === index}
                  onClick={() => handleClick(index)}
                  className={`tab-btn ${activeIndex === index && "tab-btn--active"}`}
                >
                  {tab.props.label} 
                </button>
              </li>
            ))}
          </ul>
          {tabs[activeTabIndex]}
        </nav>
      </div>
    </>
  );
};

export default Tablist;
