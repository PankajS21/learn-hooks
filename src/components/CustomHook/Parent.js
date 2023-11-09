import React, { useState } from 'react';
import useCounter from './useCounter';
import ScreenComponent from './ScreenComponent';

export default function Parent() {
    const [value, increment, decrement, reset] = useCounter(0, 5);
    // const [count, setCount] = useState(0);


    return (
        <div>
            <h1>Count: {value}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <hr />
            <ScreenComponent />
        </div>
    );
}
