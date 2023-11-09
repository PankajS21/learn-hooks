import React from "react";
// import Parent from "./components/CustomHook/Parent";
// import UseCallBackHook from "./components/UseCallBackHook";
// import UseContextHook from "./components/UseContext/UseContextHook";
// import UseMemoHook from "./components/UseMemoHook";
import { useState } from "react";
// import UseEffectHook from "./components/UseEffectHook";
// import UseRefHook from "./components/UseRefHook";
import UseStateHook from "./components/UseStateHook";


export default function App() {
  // const [flag, setFlag] = useState(true);  //For useEffect
  return (
    <div className="App">
      <UseStateHook/>


      {/* For useEffect */}


      {/* <div>
        <button onClick={() => setFlag(!flag)}>Toggle</button>
        {
          flag ? <UseEffectHook /> : ""
        }
      </div> */}



      {/* <UseRefHook /> */}

      {/* <UseMemoHook /> */}

      {/* <UseCallBackHook /> */}

      {/* <UseContextHook /> */}

      {/* <Parent /> */}
    </div>
  )
}