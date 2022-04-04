import React from 'react';
import Classes from './MyInput.module.css';

const MyInput = (props) => {
    return (
        <input {...props} className={Classes.myInput}/>
    );
}

export default MyInput;