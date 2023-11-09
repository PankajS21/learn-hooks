import  { useState } from 'react';

export default function useCounter(initialValue, newNum) {

    const [value, setValue] = useState(initialValue);

    function increment() {
        setValue(value + newNum);
    }

    function decrement() {
        setValue(value - newNum);
    }

    function reset() {
        setValue(initialValue);
    }

    return [value, increment, decrement, reset];
}
