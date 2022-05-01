import React from 'react';

export const ButtonPrimary = ({children}) => {
    return (
        <button className={`btn btn-primary rounded-full`}>
            {children}
        </button>
    );
};