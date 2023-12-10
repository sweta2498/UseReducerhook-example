import React, { useContext } from 'react'
import { StoreContext, ThemeContext } from './Context';

const Btn = () => {
    const theme = useContext(ThemeContext);
    const { dispatch } = useContext(StoreContext);

    return (
        <div>
            <h1>Component</h1>
            <button style={{ background: theme.background, color: theme.color }}>Change</button>
            <button style={{ background: theme.background, color: theme.color }} 
                onClick={() => dispatch({ type: 'ADD' })}>Add</button>
            <button style={{ background: theme.background, color: theme.color }} 
                onClick={() => dispatch({ type: 'REMOVE' })}>Remove</button>
        </div>
    )
}

export default Btn;