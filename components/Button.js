import React from "react";

const Button = ({
                    label,
                    type = 'btn--primary',
                    extraClass = '',
                    onClick = null
                }) => {
    return (
        <button
            onClick={onClick}
            className={`btn ${type} ${extraClass}`}>
            {label}
        </button>
    )
}

export default React.memo(Button)
