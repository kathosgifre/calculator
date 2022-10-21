import React from 'react';
import button from '../styles/button.css';

function Button(props) {
  const isOperator = (value) => {
    return isNaN(value) && (value !== ".") && (value !== '=');
  };
  
  return (
    <div
      className={`button-contain ${isOperator(props.children) ? "operator" : ''}`.trimEnd()}
      onClick={() => props.handleclick(props.children)}>
        {props.children}
    </div>
  );
}

export default Button;
