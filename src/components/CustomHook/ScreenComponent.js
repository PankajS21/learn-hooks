import React from 'react';
import useSetScreen from './useSetScreen';

export default function ScreenComponent() {
    const screenSize = useSetScreen();
    return (
        <div>
            <h1>We are in Screen Component</h1>
            <h2>We are in {screenSize} size screen.</h2>
        </div>
    );
}
