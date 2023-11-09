import React, { useState } from 'react';

export default function UseStateHook() {
    let name="Pankaj";
    function changename(){
        console.log("clicked");
        name="Suraj";
        return name;
    }

  return (
    <div>
      <h1>Hello, My name is {name}</h1>
      <button onClick={changename}>Click</button>
    </div>
  );
}





// Example 2 :-


// export default function UseStateHook() {
//     const [name, setName] = useState("Pankaj");
//     // console.log(useState());
//     function changename() {
//         console.log("clicked!!");
//         return setName("Suraj Singh");
//     }


//     return (
//         <div>
//             <h1>Hello, My name is {name}</h1>
//             <button onClick={changename}>Click</button>
//         </div>
//     );
// }





// Example 3 :-



// export default function UseStateHook() {
//     const [name, setName] = useState("Pankaj");
//     const [flag, setFlag] = useState(false);

//     function changename() {
//         console.log("clicked!!");
//         return setFlag(!flag);
//     }


//     return (
//         <div>
//             <h1>Hello, My name is {flag ? name : ""}</h1>
//             <button onClick={changename}>Click</button>
//         </div>
//     );
// }





// Example 4 :-


// export default function UseStateHook() {
//     let [name, setName] = useState("Pankaj");
//     let [flag, setFlag] = useState(false);

//     function changename() {
//         console.log("clicked!!");
//         setFlag(!flag);
//         {
//             flag ? setName("Suraj") : setName("Pankaj")
//         }
//         console.log("changes")
//     }


//     return (
//         <div>
//             <h1>Hello, My name is {name}</h1>
//             <button onClick={changename}>Click</button>
//         </div>
//     );
// }




// Example 5 :-



// export default function UseStateHook() {

//     let [count, setCount] = useState(0);
//     function increment() {
//         setCount((previousState) => previousState + 1);
//         setCount((previousState) => previousState + 5);
//     }
//     function decrement() {
//         setCount(count - 1);
//     }

//     return (
//         <div>
//             <button onClick={increment}>+</button>
//             <h1>{count}</h1>
//             <button onClick={decrement}>-</button>
//         </div>
//     );
// }




// Example 6 :-



// export default function UseStateHook() {

//     let [name, setName] = useState("");
//     let [arrayList, setArraylist] = useState([]);

//     function addNamesInArray(e) {
//         e.preventDefault();

//         setArraylist([...arrayList, { id: arrayList.length, name: name }]);
//         setName("");
//     }
//     console.log(arrayList);
//     return (
//         <div>
//             <form onSubmit={addNamesInArray}>
//                 <input type='text' value={name} placeholder='Enter your name' onChange={(ed) => setName(ed.target.value)} />
//                 <button type='submit'>Submit</button>
//             </form>

//             <ul>
//                 {arrayList.map((item) => (
//                     <li key={item.id}>{item.id} {item.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }





//Example 7 :-


// export default function UseStateHook() {

//     // function setvalue() 
//     const [count, setCount] = useState(()=>{
//         console.log("value has been set");
//         return 10;
//     });
//     return (
//         <div>
//             <button onClick={() => setCount(count + 1)}>increment</button>
//             <button onClick={() => setCount(count - 1)}>decrement</button>
//             Hi the count is {count}
//         </div>
//     )
// }