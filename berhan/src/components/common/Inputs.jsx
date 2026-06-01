import React from 'react';

function Input({
    label,
    id,
    className = '',
    containerClassName = '',
    ...props
}) {
    return (
        <div className={containerClassName}>
            {label && (
                <label htmlFor={id}>
                    {label}
                </label>
            )}

            <input
                id={id}
                className={className}
                {...props}
            />
        </div>
    );
}

export default Input;