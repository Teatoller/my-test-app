import React, { useState } from "react";

export const Toggle = (props) => {
    const [state, setState] = useState(false);
    return (
        <button
            onClick={() => {
                setState(previousState => !previousState);
                props.onChange(!state);
            }}
            data-testid="toggle"
        >
            {state === true ? "Turn off" : "Turn on"}
        </button>
    );
}
export default Toggle