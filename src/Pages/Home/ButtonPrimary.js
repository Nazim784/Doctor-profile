import React from 'react';

const ButtonPrimary = ({children}) => {
    return (
        <div>
             <button class="btn btn-primary font-bold text-white">{children}</button>
        </div>
    );
};

export default ButtonPrimary;