import React, { createContext, useState } from 'react';
import ChildA from './ChildA';

const data = createContext();
const data1 = createContext();

export default function UseContextHook() {

  const [name, setName] = useState("Pankaj Singh");
  const profession = "Software Developer";

  return (
    <div>
      <h1>Heyy Usecontext!</h1>
      <data.Provider value={name}>
        <data1.Provider value={profession}>
          <ChildA />
        </data1.Provider>
      </data.Provider>
    </div>
  );
}

export { data, data1 }
