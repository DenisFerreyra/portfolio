import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import style from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <span style={{ fontSize: "1vw", color: "white" }}>
        Developed by Denis Ferreyra.
      </span>
      <span style={{ fontSize: "1vw", color: "white" }}>
        Copyright © Denis Ferreyra
      </span>
      <span style={{ display: "flex", justifyContent: "space-evenly" }}>
        <a href="https://github.com/DenisOrlando" target="_blank">
          <AiFillGithub
            size={30}
            style={{ marginRight: "10px", color: "white" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/denis-ferreyra/" target="_blank">
          <AiFillLinkedin
            size={30}
            style={{ marginLeft: "10px", color: "white" }}
          />
        </a>
      </span>
    </div>
  );
};
