import React from 'react';
import Button_x from './Button_x/Button_x';
import Button_o from './Button_o/Button_o';
import classes from './Head.module.css';
import Nameplayers from './Nameplayers/Nameplayers';

function Head() {
  return (
    <div>
      <div className={classes.mainbutton}>
        <Button_x />
        <Button_o />
      </div>
        <Nameplayers />
    </div>
  );
}

export default Head;