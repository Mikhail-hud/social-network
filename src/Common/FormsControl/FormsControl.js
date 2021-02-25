import React from 'react';

export const Textarea = ({ input, meta: { touched, error }, ...props }) => {
  const hasEror = touched && error;
  return (
    <>
      {hasEror && <span>{error}</span>}
      <textarea {...input} {...props} />
    </>
  );
};

export const Input = ({ input, meta: { touched, error }, ...props }) => {
  const hasEror = touched && error;
  return (
    <>
      {hasEror && <p>{error}</p>}
      <input {...input} {...props} />
    </>
  );
};
