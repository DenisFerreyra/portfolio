import React from "react";
import { Link } from "react-router-dom";
import style from "./Contact.module.css";

export const Contact = () => {
  return (
    <div className={style.container}>
      <Link to="/">
        <button>GO HOME</button>
      </Link>
      <form style={{alignItems:"center", display:"flex", flexDirection:"column", margin:"20px 0 20px 0"}}>
          <label>NAME:</label>
          <input className={style.input} />
          <label>LASTNAME:</label>
          <input className={style.input} />
          <label>EMAIL:</label>
          <input className={style.input} />
          <label>REASON:</label>
          <textarea style={{width:"400px", height:"200px"}} />
      </form>
    </div>
  );
};
