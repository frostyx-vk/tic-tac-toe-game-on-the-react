import React from 'react';
import classes from './Button_o.module.css'
import svg from './../../../img/o.svg'

function Button_o(props) {
  return (
    <div>
      <button data-value="o" 
      className={`${classes.button__start} ${classes.symbol_o}`} 
      onClick={props.button} 
      type="button"
      >
        <img src={svg} width='30px' height='30px' />
      </button>
    </div>
  );
}

export default Button_o;