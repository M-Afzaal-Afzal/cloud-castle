import React from 'react';

export const ResponsiveBody1 = ({className,children,...props}) => {
    return (
        <p className={` text-gray text-base lg:text-[14px] font-Axiforma-Regular ${className}`} {...props}>
            {children}
        </p>
    );
};