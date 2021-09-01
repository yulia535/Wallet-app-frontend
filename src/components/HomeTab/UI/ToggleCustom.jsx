import './stylestoggle.css';
import { useState } from 'react';
import { Formik, Form, useField } from 'formik';
const ToggleCustom = ({ ...props }, onTypeChange) => {
  const [field] = useField({ ...props });

  return (
    <div>
      <input
        type="checkbox"
        className="toggle__input"
        id="toggle-input"
        {...field}
        {...props}
      />
      <div className="toggle__bar">
        <div className="toggle__spin"></div>
      </div>
    </div>
  );
};

export default ToggleCustom;
