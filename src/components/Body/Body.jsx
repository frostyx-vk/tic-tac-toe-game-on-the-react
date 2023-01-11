import React from 'react';
import classes from './Body.module.css';
import Square from './Square/Square';



function Body() {

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes.square}>
          <div className={classes.square_line}>
            <Square data-x="0" data-y="0" />
            <Square data-x="0" data-y="1" />
            <Square data-x="0" data-y="2" />
          </div>
          <div className={classes.square_line}>
            <Square data-x="1" data-y="0" />
            <Square data-x="1" data-y="1" />
            <Square data-x="1" data-y="2" />
          </div>
          <div className={classes.square_line}>
            <Square data-x="2" data-y="0"/>
            <Square data-x="2" data-y="1" />
            <Square data-x="2" data-y="2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;