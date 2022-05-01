import React from 'react';

export const ResponsiveH1 = ({className,children,hasCustomFontSize,...props}) => {
    return (
        <h1 className={`font-bold tracking-widest uppercase text-white font-Poppins ${hasCustomFontSize ? '' : `text-3xl lg:text-4xl`} ${className}`} {...props}>
            {children}
        </h1>
    );
};