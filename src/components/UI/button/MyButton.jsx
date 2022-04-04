import React from 'react';
import Classes from './MyButton.module.css';

const MyButton = ({children, ...props}) => {
    return (
    <button {...props} className={Classes.myBtn}>{children}</button>
    );
}

export default MyButton;