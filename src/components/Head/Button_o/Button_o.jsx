import React from 'react';
import classes from './Button_o.module.css'

function Button_o() {
  return (
    <div>
      <button data-value="o" 
      className={`${classes.button__start} ${classes.symbol_o}`} 
      onclick="handleButton(this)" 
      type="button"
      >

      </button>
    </div>
  );
}

export default Button_o;