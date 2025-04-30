import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By VamJobs.</div>
      <div>
        <Link to={"https://www.facebook.com/vamsi.prathamsai"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://github.com/VamsiNarayanam"} target="_blank">
          <FaGithub />
        </Link>
        <Link to={"https://www.linkedin.com/in/vamsi-narayanam321/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/its_vamsi20/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;