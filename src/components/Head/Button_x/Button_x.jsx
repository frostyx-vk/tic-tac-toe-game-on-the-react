import React from 'react';
import classes from './Button_x.module.css';
import svg from './../../../img/x.svg'

function Button_x(props) {
  return (
    <div>
      <button data-value="x" 
      className={`${classes.button__start} ${classes.symbol_x}`} 
      onClick={props.button} 
      type="button"
      >
        <img src={svg} width='30px' height='30px' />
      </button>
    </div>
  );
}

export default Button_x;