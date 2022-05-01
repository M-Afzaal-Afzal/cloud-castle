import React from 'react';

export const ButtonPrimary = ({children,className}) => {
    return (
        <button className={`btn btn-primary rounded-full ${className}`}>
            {children}
        </button>
    );
};