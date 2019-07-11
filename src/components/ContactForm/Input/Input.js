// import React and CSS
import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
   
   // These are the properties sent from the form
   const { name, label, type, value, onChange } = props;
   
   // 
   return (
      <div>
         <label className={ styles.inputlabel }>{label}</label>
         <input
            name={ name }
            type={ type }
            value={ value }
            onChange={ onChange }
            className={ styles.inputfield }
         >
         </input>
      </div>
   );
};

export default Input;
