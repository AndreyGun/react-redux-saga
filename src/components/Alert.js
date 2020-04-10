import React from 'react';

export const Alert = ({ text }) => {
    return (
        <div className="alert alert-secondary" role="alert">
            {text}
        </div>
    )
}