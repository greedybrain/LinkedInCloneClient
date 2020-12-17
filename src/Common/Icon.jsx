import React from 'react'

const Icon = ({ name, navItemClicked, theseStyles }) => {
        return (
                <div className="icon_wrapper">
                        <i className={name} onClick={navItemClicked} style={theseStyles}></i>
                </div>
        )
}

export default Icon
