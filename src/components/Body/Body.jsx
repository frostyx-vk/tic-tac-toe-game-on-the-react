import React from 'react';
import classes from './Body.module.css';
import Square from './Square/Square';

function Body() {
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes.square}>
          <div className={classes.square_line}>
            <Square />
            <Square />
            <Square />
          </div>
          <div className={classes.square_line}>
            <Square />
            <Square />
            <Square />
          </div>
          <div className={classes.square_line}>
            <Square />
            <Square />
            <Square />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;