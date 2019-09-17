import React from 'react'

function NavigationButtons(onClick) {
    return (
        <div className="home navigation-buttons">
            <button onClick={ onClick }>About</button>
            <button onClick={ onClick }>Projects</button>
        </div>
    )
}

export default NavigationButtons;