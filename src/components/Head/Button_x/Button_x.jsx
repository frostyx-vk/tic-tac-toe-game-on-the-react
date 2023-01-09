import React from 'react';
import classes from './Button_x.module.css';

function Button_x() {
  return (
    <div>
      <button data-value="x" className={`${classes.button__start} ${classes.symbol_x}`} onclick="handleButton(this)" type="button"></button>
    </div>
  );
}

export default Button_x;