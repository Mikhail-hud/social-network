import React from "react";
import s from "./Preloader.module.css";

const Preloader = (props) => {
  return (
    <div className={s.container}>
      <div className={s.item_1}></div>
      <div className={s.item_2}></div>
      <div className={s.item_3}></div>
      <div className={s.item_4}></div>
      <div className={s.item_5}></div>
    </div>
  );
};

export default Preloader;
