import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleNavigate = (to) => {
    navigate(to);
  };
  return (
    <>
      <div className="home-div">
        <div className="home-tab" onClick={() => handleNavigate("./exercise1")}>
          Exercise 1
        </div>
        <div className="home-tab" onClick={() => handleNavigate("./exercise2")}>
          Exercise 2
        </div>
      </div>
    </>
  );
}
