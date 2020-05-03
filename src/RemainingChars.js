import React from "react"

const RemainingChars = ({ length }) => {
    return (
        <div id="character-check">
            <p>{100 - length}/100</p>
        </div>
    )
}

export default RemainingChars;