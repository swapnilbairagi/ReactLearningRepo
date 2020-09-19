import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const useStateWithLocalStorage = (localStorageKey) => {
    debugger;
    const [name, setValue] = useState(localStorage.getItem(localStorageKey) || '');

    useEffect(() => {
        //console('useEffect');
        debugger;
        localStorage.setItem(localStorageKey, name);
    }, [name]);

    return [name,setValue];
};


const LocalStorageLearning = () => {

    //const [name, setValue] = useState(localStorage.getItem('myLocalStorageValue'));
    const [name, setValue] = useStateWithLocalStorage('myLocalStorageValue');

    // useEffect(() => {
    //     localStorage.setItem('myLocalStorageValue', name);

    // }, [name]);

    const onChange = (event) => {
        //console('setValue');
        debugger;
        setValue(event.target.value);
    }

    return (
        <>
            <h1>React with local storage...!!</h1>
            <input type="text" onChange={onChange} value={name}></input>
            <p>{name}</p>
        </>

    );

}

export default LocalStorageLearning;