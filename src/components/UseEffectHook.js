import React, { useEffect, useState } from 'react';

export default function UseEffectHook() {
    const [time, setTime] = useState(new Date().toString());
    const [message, setMessage] = useState("Functional Component");

    function changeTime() {
        setTime(new Date().toString());
    }

    function changeMessage() {
        setMessage("Component has been changes successfully!!!");
    }

    useEffect(() => {
        console.log("component mounted or, updated");

        let interval = setInterval(changeTime, 22000);
        return (() => {
            clearInterval(interval);
            console.log("component unmounted")
        })
    },[time]);
    console.log("heyyy")
    return (
        <div>
            <h1>{time}</h1>
            <button onClick={changeTime}>Change Time</button>
            <hr />
            <h1>{message}</h1>
            <button onClick={changeMessage}>Change Message</button>
        </div>
    );
}








//Example 2:-


// export default function UseEffectHook() {
//     const [newflg, setnewflag] = useState(true);
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         console.log("number changed");

//         return (() => {

//             console.log("component umounted");
//         })
//     })

//     console.log("heyyy")

//     return (
//         <div>
//             {
//                 newflg ?
//                     <>
//                         <button onClick={() => setCount(count + 1)}>+</button>
//                         <button onClick={() => setCount(count - 1)}>-</button>
//                         {count}
//                     </>

//                     : ""
//             }

//             <button onClick={() => setnewflag(!newflg)}>Click Here</button>
//         </div>
//     );
// }
