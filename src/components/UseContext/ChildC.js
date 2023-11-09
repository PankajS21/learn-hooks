import React, { useContext } from 'react';
import { data, data1 } from './UseContextHook';

export default function ChildC() {
    const firstName = useContext(data);
    const myProfession = useContext(data1);
    return (
        <div>
            <h1>I am Child C</h1>
            <p>My name is {firstName} and I am a {myProfession} by profession</p>
        </div>
    );
}
