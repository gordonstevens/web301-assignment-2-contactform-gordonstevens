// import React, Component and CSS
import React from 'react';
import Option from '../Option/Option';
import styles from './Select.module.css';

const Select = (props) => {
   
   // These are the properties sent from the form
   const { name, label, options, value, onChange } = props;
   
   // Options are a mess in React without using another react-select package.
   // REF: https://stackoverflow.com/questions/47616355/react-foreach-in-jsx

   return (
      <div>
         <label className={styles.selectlabel}>{label}</label>
         <select
            name={name}
            value={value}
            onChange={onChange}
            className={styles.selectoption}
         >
            {
               // Here we could map the value with the index as a key, but having the key and the value the same suits it fine 
               options.map((topicval) => {
                  return (<Option key={topicval} val={topicval} />)
               })
            }
         </select>
      </div>
   );
};

export default Select;
