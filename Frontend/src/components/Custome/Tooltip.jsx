import React from 'react'

const Tooltip = (props) => {
    return (
        <p>
            <abbr className="tooltip">
                {props.content}
                <span className="tooltip-text">{props.overlya}</span>
            </abbr>
        </p>
    )
}

export default Tooltip
