import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Exercise2() {
  const [activeTab, setActiveTab] = useState("");
  let data = require("../data.json");
  const handleUpdateTab = (sectionName) => {
    if (sectionName === activeTab) {
      setActiveTab("");
    } else {
      setActiveTab(sectionName);
    }
  };

  return (
    <div className="exercise2-container">
      <div className="section">
        {data.map((sectionData, i) => {
          return (
            <div key={i}>
              <div
                className={`${
                  activeTab === sectionData.title && "section__tab--active"
                } ${i === 0 && "section__tab--first"} section__tab`}
                onClick={() => {
                  handleUpdateTab(sectionData.title);
                }}
              >
                <label>{sectionData.title}</label>
                <label>
                  {activeTab !== sectionData.title ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronUp />
                  )}
                </label>
              </div>
              {activeTab === sectionData.title && (
                <>
                  <div
                    className="section__content"
                    dangerouslySetInnerHTML={{ __html: sectionData.content }}
                  ></div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
