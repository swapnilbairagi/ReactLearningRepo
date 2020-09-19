import React, { useState } from 'react';


const Forms = () => {

    //const [firstname, setFirstName] = useState();
    //const [lastname, setLastName] = useState();
    const [fullname, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: ""
    });

    // const inputEventFirstName = (event) => {
    //     setFirstName(event.target.value);
    // }

    // const inputEventLastName = (event) => {
    //     setLastName(event.target.value);
    // }

    const inputEvent = (event) => {

        // const value = event.target.value;
        // const name = event.target.name;

        const { name, value } = event.target;

        setFullName((prevDetails) => {

            return {
                ...prevDetails,
                [name]: value
            }  ///We have converted below lengthy code with two lines code, with the help og spread operator

            // if (name === "fname") {
            //     return {
            //         fname: value,
            //         lname: prev.lname,
            //         email: prev.email,
            //         phone: prev.phone
            //     }
            // }
            // else if (name === "lname") {
            //     return {
            //         fname: prev.fname,
            //         lname: value,
            //         email: prev.email,
            //         phone: prev.phone
            //     }
            // }
            // else if (name === "email") {
            //     return {
            //         fname: prev.fname,
            //         lname: prev.lname,
            //         email: value,
            //         phone: prev.phone
            //     }
            // }
            // else if (name === "phone") {
            //     return {
            //         fname: prev.fname,
            //         lname: prev.lname,
            //         email: prev.email,
            //         phone: value
            //     }
            // }
        });
    }

    const onsub = (event) => {
        event.preventDefault();
        //setFullName(firstname + " " + lastname);
    }

    return (
        <>
            <form onSubmit={onsub}>
                <div>
                    <h1>
                        Hello {fullname.fname} {fullname.lname}
                    </h1>
                    <p>{fullname.email}</p>
                    <p>{fullname.phone}</p>
                    <input type="text" name="fname" placeholder="Enter First Name" onChange={inputEvent} value={fullname.fname} ></input>
                    <br />
                    <input type="text" name="lname" placeholder="Enter Last Name" onChange={inputEvent} value={fullname.lname} ></input>
                    <br />
                    <input type="email" name="email" placeholder="Enter Email Address" onChange={inputEvent} value={fullname.email} ></input>
                    <br />
                    <input type="number" name="phone" placeholder="Enter Mobile Number" onChange={inputEvent} value={fullname.phone} ></input>
                    <button type="submit">Click me...!👍</button>
                </div>
            </form>
        </>

    );

}

export default Forms;