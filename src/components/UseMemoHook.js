import React, { useMemo, useState } from 'react';

export default function UseMemoHook() {
    const [count, setCount] = useState(0);

    const factorial = useMemo(() => {
        console.log("khkhk")
        return fact(count);
    },[count])


    const [message, setMessage] = useState("");

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => { setCount(count + 1) }}>Increment</button>
            <button onClick={() => { setCount(count - 1) }}>Decrement</button>


            <h1>Factorial of above number is : {factorial}</h1>
            <hr />

            <input type='text' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter your name' />

            <DisplayMessage name={message} />
        </div>
    );
}

const DisplayMessage = React.memo(({ name }) => {
    console.log("renderinggg!")
    return <h1>My name is {name}</h1>
});

function fact(n) {
    let i = 0;
    while (i < 100000000) {
        i++;
    }
    if (n < 0) return -1;
    if (n === 0) return 1;

    return n * fact(n - 1);
}