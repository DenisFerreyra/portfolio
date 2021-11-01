import React from "react";
import { Link } from "react-router-dom";
import style from "./Contact.module.css";
import { GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";

export const Contact = () => {
  return (
    <div className={style.container}>
      <Link to="/">
        <button>GO HOME</button>
      </Link>
      <div style={{width:"20vw"}}>
        <h2>SOCIAL MEDIA</h2>
        <div className={style.socialmedia}>
          <a href="https://github.com/DenisOrlando" target="_blank">
            <GoMarkGithub className={style.link} size={100} />
            <h4 className={style.ha4}>GITHUB</h4>
          </a>
          <a href="https://www.linkedin.com/in/denis-ferreyra/" target="_blank">
            <GrLinkedin className={style.link} size={100} />
            <h4 className={style.ha4}>LINKEDIN</h4>
          </a>
        </div>
      </div>
    </div>
  );
};
