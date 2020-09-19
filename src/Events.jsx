import React, { useState } from 'react';


const Events = () => {
    let bgColor = 'black';
    const [Bg, setBg] = useState(bgColor);
    const [Name, setName] = useState('Click Me..!!');

    function MouseOver() {

        setBg('Green');
        setName('Hey...');

    }

    function MouseLeave() {

        setBg('purple');
        setName('Ouchh...');

    }

    return (
        <>
            <div style={{ backgroundColor: Bg }}>
    <button style={{ alignContent: "center" }} onMouseOver={MouseOver} onMouseLeave={MouseLeave} >{Name}</button>
            </div>
        </>

    );

}

export default Events;