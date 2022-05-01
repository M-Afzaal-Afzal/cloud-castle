import React from 'react';

export const ResponsiveH2 = ({className, children,...props}) => {
    return (
        <h2 className={`text-lg font-Axiforma-Regular lg:text-xl text-white ${className}`} {...props}>
            {children}
        </h2>
    );
};