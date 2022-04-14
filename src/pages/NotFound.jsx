import React from "react";
import Classes from './NotFound.module.css';

const NotFound = () => {
    return (
        <div>
            <h1 className={Classes.err}>Resource not found!</h1>
        </div>
    );
}

export default NotFound;