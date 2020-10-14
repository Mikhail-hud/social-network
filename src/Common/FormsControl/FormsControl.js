import React from "react";
import s from "./FormControl.module.css";

export const Textarea = ({ input, meta:{touched,error}, ...props }) => {
  const hasEror = touched && error;
  return (
    <>
      {hasEror && <span className={s.error}>{error}</span>}
      <textarea {...input} {...props} />
    </>
  );
};



export const Input = ({ input, meta:{touched,error}, ...props }) => {
  const hasEror = touched && error;
  return (
    <>
      {hasEror && <p className={s.error}>{error}</p>}
      <input {...input} {...props} />
    </>
  );
};
