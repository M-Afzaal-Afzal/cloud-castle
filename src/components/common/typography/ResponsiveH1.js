import React from 'react';

export const ResponsiveH1 = ({className,children,...props}) => {
    return (
        <h1 className={`font-bold tracking-widest uppercase text-white font-Poppins text-3xl lg:text-4xl ${className}`} {...props}>
            {children}
        </h1>
    );
};