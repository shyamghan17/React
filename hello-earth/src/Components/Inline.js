import React from 'react'

function Inline() {
    const heading = {
        fontSize: '72px', 
        color:'blue'
    }
    return (
        <div>
            <h2 className="error">Error</h2>
            <h2 style= {heading}>Hello Earth</h2>
            
        </div>
    )
}

export default Inline