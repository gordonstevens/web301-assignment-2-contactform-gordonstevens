// import React and CSS
import React from 'react';
import styles from './Textarea.module.css';

const Textarea = (props) => {
   
   // These are the properties sent from the form
   const { name, label, cols, rows, onChange } = props;
   
   return (
      <div>
         <label className={ styles.textarealabel }>{label}</label>
         <textarea
            name={ name }
            cols={ cols }
            rows={ rows }
            onChange={ onChange }
            className={ styles.textareafield }
         >
         </textarea>
      </div>
   );
};

export default Textarea;
