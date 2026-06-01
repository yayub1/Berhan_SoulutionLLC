import React from "react";

function Card({ children, className = "", onClick }) {
    return (
        <div onClick={onClick} className={className}>
            {children}
        </div>
    );
}

export default Card;