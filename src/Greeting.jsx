import React from 'react'


function Greeting() {
    let greeting = "";
    let curDate = new Date(2020, 5, 5, 20);
    curDate = curDate.getHours();
    const cssStyle = {};

    if (curDate >= 1 && curDate < 12) {
        greeting = "Good Morning";
        cssStyle.color = "green";
    }
    else if (curDate >= 12 && curDate < 17) {
        greeting = "Good Afternoon";
        cssStyle.color = "orange";
    }
    else {
        greeting = "Good Night";
        cssStyle.color = "black";
    }

    return <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
}

export default Greeting;