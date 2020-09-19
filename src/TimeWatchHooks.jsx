import React, { useState } from 'react';



const TimeWatch = () => {
    const curTime = new Date().toLocaleTimeString();
    const [CurrentTime, setTime] = useState(curTime);

    function UpdateTime() {
        return (
            setTime(new Date().toLocaleTimeString())
        );
    }
    return (
        <>
            <h1>{CurrentTime}</h1>
            <button onClick={UpdateTime}> Click Me</button>
        </>
    );
}

export default TimeWatch;