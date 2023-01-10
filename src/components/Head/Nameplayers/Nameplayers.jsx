import React from 'react';
import classes from './Nameplayers.module.css'

function Nameplayers() {
  return (
    <div className={classes.nameplayers}>
      <div><p className={classes.nameplayers__x}></p></div>
      <div><p className={classes.nameplayers__o}></p></div>
    </div>
  );
}

export default Nameplayers;