import './stylestoggle.css'
import { useState } from 'react';
import { Formik, Form, useField } from 'formik';
// const ToggleCustom = ({type, setType, onHandleChange})=>{
  const ToggleCustom = ({ ...props })=>{

//   const [type, setType] = useState(false);
// const testFunc =(e)=>{
// setType(e.target.checked)
// onHandleChange(type)
// }


// const onChange=(e)=>{
//   setType(e.target.checked);
//   onHandleChange(e)
// }
const [field] = useField({ ...props });

return (
    <div className="toggleContainer" >
          <div className="chooseTypeToggle">
    <label htmlFor="toggle-input" className="toggle" >
    <span className="income">Доход</span>

      <input type="checkbox"  className="toggle__input" id="toggle-input" {...field} {...props} />
      <div className="toggle__bar">
        <div className="toggle__spin"></div>
      </div>
      <span className="outcome">Расход</span>
    </label>

    </div>
    </div>

);
}


export default ToggleCustom;