import React from 'react';
import Classes from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {
    const rootClasses = [Classes.myModal];
    if (visible)
        rootClasses.push(Classes.active);
    return (
        <div className={rootClasses.join(' ')}>
            <div className={Classes.myModalContent}>
                {children}
            </div>
        </div>
    );
}

export default MyModal;