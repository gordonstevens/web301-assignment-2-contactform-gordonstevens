// Import React and CSS
import React from 'react';
import styles from './Modal.module.css';

/*
   SHOW MODAL STATE VAR: const [showModal, setShowModal] = useState(false);    This is located in the invoking code file
   TRIGGER: using <Button handleClick={() => setShowModal(true)}> in the invoking code file
*/

const Modal = (props) => {
   const { children } = props;
   return (
      <div className={styles.modalframe}>
         <div classname={styles.modalcontent}>
            <article class={styles.modalinner}>
               { children }
            </article>
         </div>
      </div>
   )
}

export default Modal;
