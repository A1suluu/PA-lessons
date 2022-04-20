import React from 'react';
import classes from './MyButton.moduls.css'

function MyButton ({children, ...props}) {
    return (
        <button className={classes.myBtn}> 
        {children}
        </button>
    )
}

export default MyButton