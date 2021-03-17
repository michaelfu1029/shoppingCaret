import React from 'react';

const DefaultButton = ({
        title, onClick
    }) => {
        return (
        <button
            onClick={onClick}
        >
            {title}
        </button>
        );
    };

export default DefaultButton;