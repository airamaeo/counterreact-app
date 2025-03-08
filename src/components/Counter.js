import React, { useState } from 'react';
import './Counter.css';

function Counter() {
    const [count, setCount] = useState(0);

    const increase = () => setCount(prevCount => prevCount + 1);
    const decrease = () => setCount(prevCount => prevCount - 1);
    const reset = () => setCount(0);

    return (
        <div className="container">
            <h3>Count: {count}</h3>
            <div className="buttons">
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
                <button onClick={reset} className="reset">Reset</button>
            </div>
        </div>
    );
}

export default Counter;
