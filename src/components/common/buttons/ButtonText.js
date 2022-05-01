import React from 'react';

export const ButtonText = ({children}) => {
    return (
        <div className={`cursor-pointer text-white`}>
            {children}
        </div>
    );
};