import React, { useState } from 'react';



const StopWatch = () => {

    const curTime = new Date().toLocaleTimeString();
    const [CurrentTime, setTime] = useState(curTime);

    function UpdateTime() {
        return (
            setTime(new Date().toLocaleTimeString())
        );
    }

    setInterval(UpdateTime,100);
    return (

        <>
            <h1>{CurrentTime}</h1>

        </>

    )

};

export default StopWatch;