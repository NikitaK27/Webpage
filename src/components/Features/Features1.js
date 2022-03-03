import React, { useState } from 'react';
import "./features.css";
import Menu from "./data.js";
import Features from './Features';





const Features1 = () => {
  const [MenuData, setMenuData] = useState(Menu);
 

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      
      <Features MenuData={MenuData} />
    </>
  );
};

export default Features1;