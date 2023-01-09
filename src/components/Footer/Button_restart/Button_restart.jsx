import React from 'react';
import classes from './Button_restart.module.css';

function Button_restart() {
  return (
    <div className={classes.restart}>
      <button className={classes.button__restart} type="button" onClick="refreshPage()">RESTART GAME</button>
    </div>
  );
}

export default Button_restart;