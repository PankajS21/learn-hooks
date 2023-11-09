import React, { useEffect, useRef, useState } from 'react';

// export default function UseRefHook() {

//     const [name, SetName] = useState("");
//     const changeElement = useRef("");
//     console.log(changeElement);

//     function changeData() {
//         SetName("");
//         changeElement.current.focus();
//         console.log(changeElement.current.value);
//         // changeElement.current.style.backgroundColor = "grey";
//         changeElement.current.value = "Suraj";
//     }
//     return (
//         <div>
//             <h1>Hi, my name is {name}</h1>
//             <input ref={changeElement} type='text' value={name} placeholder='Enter your name' onChange={(e) => SetName(e.target.value)} />

//             <button onClick={changeData}>Reset</button>
//         </div>
//     );
// }




// Example 2 :-


// export default function UseRefHook() {

//     const [count, setCount] = useState(0);
//     const prevStateCount = useRef("");

//     useEffect(() => {
//         console.log("hello"+ count);
//         prevStateCount.current = count;
//     })
// console.log(prevStateCount.current)
//     return (
//         <div>
//             <h1>Current Count:{count}</h1>
//             <button onClick={(e) => { setCount(Math.ceil(Math.random() * 100)) }}>Generate Number</button>
//             {prevStateCount.current}
//             {
//                 typeof prevStateCount.current !== undefined &&(<h2>Previous Count: {prevStateCount.current}</h2>)                
//             }
//         </div>
//     );
// }



export default function UseRefHook() {
    const [count, setCount] = useState(0);

    const previousState = useRef("");
    useEffect(() => {
        previousState.current = count;
        console.log(previousState.current);
    })
    console.log(previousState.current);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={(e) => { setCount(Math.ceil(Math.random() * 1000)) }}>Generate Number</button>

            <h1>Previous State: {previousState.current}</h1>
        </div>
    );
}