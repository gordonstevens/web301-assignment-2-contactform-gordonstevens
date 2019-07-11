// Import React system and CSS
import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = (props) => {
    const { children, handleClick } = props;

    return (
        <button 
            type="button" 
            className = { styles.button } 
            onClick = { handleClick }
        >
            {children}
        </button>
    );
};

// Props
/*
    children - string, html element, React Component
    handleClick - function
*/
// propTypes REFERENCE URL: https://www.npmjs.com/package/prop-types
Button.propTypes = {
    children: PropTypes.oneOfType( [
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
        PropTypes.node
    ] ),
    handleClick: PropTypes.func,
}

export default Button;
