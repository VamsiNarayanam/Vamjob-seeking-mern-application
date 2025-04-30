import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "500",
      subTitle: "Jobs Present",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "100",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "12000",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "4000",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];
  return (
    <>
      <div className="heroSection">
        <div className="container">
          <div className="title">
            <h2>Find Your Dream Job </h2>
            <p>
              Unlock exciting new career opportunities tailored to your unique skills,
              passions, and long-term goals.we are here to guide you every step of the way. Take charge of your future, explore diverse industries, and discover where your true potential can lead you!
            </p>
          </div>
          <div className="image">
            <img src="/job_search-modified.jpg" alt="hero" />
          </div>
        </div>
        <div className="details">
          {details.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="icon">{element.icon}</div>
                <div className="content">
                  <p>{element.title}</p>
                  <p>{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;