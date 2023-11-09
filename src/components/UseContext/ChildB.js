import React, { useContext } from 'react';
import ChildC from './ChildC';
import { data, data1 } from './UseContextHook';

export default function ChildB() {
    const myname = useContext(data);
    return (
        <div>
            <h1>I am ChildB and my name is {myname}</h1>

            <ChildC />
        </div>
    );
}
