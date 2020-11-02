import React from "react";
import s from "./FormControl.module.css";

export const Textarea = ({ input, meta:{touched,error}, ...props }) => {
  const hasEror = touched && error;
  return (
    <>
      {hasEror && <span className={s.error}>{error}</span>}
      <textarea className={hasEror ? `${s.message_tx_error} ${s.message_tx_in}` : s.message_tx_in} {...input} {...props} />
    </>
  );
};



export const Input = ({ input, meta:{touched,error}, ...props }) => {
  const hasEror = touched && error;
  return (
    <>
      {hasEror && <p className={s.error}>{error}</p>}
      <input  {...input} {...props} />
    </>
  );
};
