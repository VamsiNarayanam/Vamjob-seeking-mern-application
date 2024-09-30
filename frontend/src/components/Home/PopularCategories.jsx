import React from "react";
import {
  MdOutlineDesignServices,
  MdOutlineWebhook,
  MdAccountBalance,
  MdOutlineAnimation,
} from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      title: "UI/UX Design",
      subTitle: "40 Open Positions",
      icon: <MdOutlineDesignServices />,
    },
    {
      id: 2,
      title: "Cyber security",
      subTitle: "20 Open Positions",
      icon: <TbAppsFilled />,
    },
    {
      id: 3,
      title: "Data Science",
      subTitle: "50 Open Positions",
      icon: <MdOutlineWebhook />,
    },
    {
      id: 4,
      title: "Mern Stack Development",
      subTitle: "40 Open Positions",
      icon: <FaReact />,
    },
    {
      id: 5,
      title: "Investment Banking",
      subTitle: "30 Open Positions",
      icon: <MdAccountBalance />,
    },
    {
      id: 6,
      title: "Artificial Intelligence",
      subTitle: "15 Open Positions",
      icon: <GiArtificialIntelligence />,
    },
    {
      id: 7,
      title: "Digital Marketing",
      subTitle: "50 Open Positions",
      icon: <MdOutlineAnimation />,
    },
    {
      id: 8,
      title: "Game Development",
      subTitle: "25 Open Positions",
      icon: <IoGameController />,
    },
  ];
  return (
    <div className="categories">
      <h3>TRENDING CATEGORIES</h3>
      <div className="banner">
        {categories.map((element) => {
          return (
            <div className="card" key={element.id}>
              <div className="icon">{element.icon}</div>
              <div className="text">
                <p>{element.title}</p>
                <p>{element.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCategories;