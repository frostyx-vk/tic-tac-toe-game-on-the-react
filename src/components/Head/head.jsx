import React from 'react';
import Button_x from './Button_x/Button_x';
import Button_o from './Button_o/Button_o';
import classes from './Head.module.css';

function Head() {
  return (
    <div className={classes.mainbutton}>
      <Button_x />
      <Button_o />
    </div>
  );
}

export default Head;