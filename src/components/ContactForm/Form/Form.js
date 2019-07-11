// Import React and CSS
import React from 'react';
import styles from "./Form.module.css";

const Form = (props) => {
   // In class we discussed capturing the default submit action, so I used:
   // https://stackoverflow.com/questions/28479239/setting-onsubmit-in-react-js and https://reactjs.org/docs/forms.html
   const { children } = props;
   const handleSubmit = (e) => { e.preventDefault(); }

   return (
      <form className={ styles.formstyle } onSubmit={ (e) => handleSubmit(e) }>
         { children }
      </form>
   )
};

export default Form;
