import React, { useCallback, useEffect, useMemo, useState } from 'react';

// export default function UseCallBackHook() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("");
//   const result = useMemo(() => {
//     console.log("render")
//     return factorial(count);
//   }, [count])


//   const displayName = useCallback(() => {
//     return name;
//   }, [name]);


//   return (
//     <div>
//       <h1>Factorial of {count} is : {result} </h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//       <hr />
//       <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />

//       <DisplayName displayName={displayName}></DisplayName>
//     </div>
//   );
// }

// // const DisplayName = React.memo(({ displayName }) => {
// //   console.log(displayName);
// //   return <h1>My name is {displayName()}</h1>
// // });


// const DisplayName = ({ displayName }) => {
//   console.log("yhjh")
//   const [value, setValue] = useState("");
//   useEffect(() => {
//     console.log("dfsfgdf");
//     setValue(displayName());
//   }, [displayName])

//   return <h1>My name is {value}</h1>
// };



// function factorial(n) {
//   let i = 0;
//   while (i < 50000) {
//     i++;
//   }
//   if (n < 0) {
//     return -1;
//   }

//   if (n === 0) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// }



// export default function UseCallBackHook() {

//   const [count, setCount] = useState(0);

//   const [name, setname] = useState("");

//   const displayName = useCallback(() => {
//     console.log("first");
//     return name;
//   }, [name])

//   return (
//     <div>
//       <h1>Current count is : {count}</h1>
//       <button onClick={(e) => setCount(count + 1)}>+</button>
//       <button onClick={(e) => setCount(count - 1)}>-</button>
//       <br />
//       <input value={name} onChange={(e) => setname(e.target.value)} placeholder='Enter your name' />
//       <DisplayName displayName={displayName}></DisplayName>
//     </div>
//   );
// }

// const DisplayName = ({ displayName }) => {
//   console.log("second");

//   const [value, setValue] = useState("");
//   useEffect(() => {
//     console.log("third")
//     setValue(displayName());
//   }, [displayName])
//   return (
//     <h1>Heyy! My name is {displayName}</h1>
//   )
// }








export default function UseCallBackHook() {
  const [count, setCount] = useState(0);
  const [anotherCount, setAnothercount] = useState(10);

  const myfunc = useCallback(() => {
    console.log("parent");
    return (10 + 24);
    //
  }, [anotherCount])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <hr />
      <h1>Second count</h1>
      <h1>{anotherCount}</h1>
      <button onClick={() => setAnothercount(anotherCount * 2)}>Multiply by 2</button>
      <ChildComponent myfunc={myfunc} anotherCount={anotherCount} />
    </div>
  );
}


const ChildComponent = React.memo(({ myfunc, anotherCount }) => {
  console.log("child component");
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(myfunc());
  })

  return (
    <>
    <h1>Hello</h1>
    <h1>{value}</h1>
    </>
    

  )
})