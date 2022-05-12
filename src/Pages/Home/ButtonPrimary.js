import React from 'react';

const ButtonPrimary = ({children}) => {
    return (
        <div>
             <button className="btn btn-primary font-bold text-white">{children}</button>
        </div>
    );
};

export default ButtonPrimary;