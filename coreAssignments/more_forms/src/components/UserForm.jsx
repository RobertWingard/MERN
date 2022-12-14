import React, { useState } from 'react';


const UserForm = (props) => {
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirm_password, setConfirmPassword] = useState("");
    // const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    // const [error, setError] = useState("");

    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirm_password: "",
        hasBeenSubmitted: "",
    })

    const [formError, setError] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirm_password: "",
        hasBeenSubmitted: "",
    })
    // const confirm = (e) => {
    //     if(e.target.value === inputs.password){
    //         setError({
    //             ...formError,
    //             confirm_password: "",
    //         })
    //     }else{
    //         setError({
    //             ...formError,
    //             [e.target.name]: "Must match Password"
    //         })
    //     }
    // }
    // const createUser = (e) => {
    //     e.preventDefault();
    //     const newUser = { firstName, lastName, email, password, confirm_password };
    //     console.log("Welcome", newUser);
    //     setHasBeenSubmitted(true)
    // }
    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
        // console.log(e.target.name)
        if (e.target.name === "firstName" || e.target.name === "lastName") {
            if (e.target.value.length < 3 && e.target.value.length !== 0) {
                setError({
                    ...formError,
                    [e.target.name]: "must be more than 3 characters"
                })
            } else {
                setError({
                    ...formError,
                    [e.target.name]: ("")
                }
                )
            }
        }
        if (e.target.name === "email") {
            if (e.target.value.length < 5 && e.target.value.length !== 0) {
                setError({
                    ...formError,
                    [e.target.name]: "must be more than 5 characters"
                })
            } else {
                setError({
                    ...formError,
                    [e.target.name]: ("")
                }
                )
            }
        } if (e.target.name === "password" || e.target.name === "confirm_password") {
            if (e.target.value.length < 8 && e.target.value.length !== 0) {
                console.log("check me here first")
                setError({
                    ...formError,
                    [e.target.name]: "must be more than 8 characters"
                })
            } else if (inputs.password !== e.target.value) {
                console.log("passwords dont match")
                setError({
                    ...formError,
                    [e.target.name]: "passwords must match"
                })
            } else {
                console.log("reset password")
                setError({
                    ...formError,
                    password: "",
                    confirm_password: "",
                }
                )
            }
        }
    }


    // setInputs(e.target.value);
    // if (e.target.value.length < 1) {
    //     setError("Name is required!");
    // } else if (e.target.value.length < 3) {
    //     setError("Name must by greated than 3 characters!");
    // } else {
    //     setError("");
    // }



    // const formMessage = () => {
    //     if (hasBeenSubmitted) {
    //         return "Thank you for the submitting";
    //     } else {
    //         return "Welcome, please submit the form";
    //     }
    // }
    return (
        <>
            <form>
                <div>
                    <label>First Name: </label>
                    <input name="firstName" type="text" onChange={handleChange} value={inputs.firstName} placeholder="Please type first name " />
                    {
                        formError.firstName ? <p style={{ color: 'red' }}>{formError.firstName}</p> : ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input name="lastName" type="text" onChange={handleChange} value={inputs.lastName} placeholder="Please type last name " />
                    {
                        formError.lastName ? <p style={{ color: 'red' }}>{formError.lastName}</p> : ''
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input name="email" type="text" onChange={handleChange} value={inputs.email} placeholder="Please type email" />
                    {
                        formError.email ? <p style={{ color: 'red' }}>{formError.email}</p> : ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input name="password" type="password" onChange={handleChange} value={inputs.password} placeholder="Make it something secret" />
                    {
                        formError.password ? <p style={{ color: 'red' }}>{formError.password}</p> : ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input name="confirm_password" type="password" onChange={handleChange} value={inputs.confirm_password} />
                    {
                        formError.password ? <p style={{ color: 'red' }}>{formError.confirm}</p> : ''
                    }
                </div>

            </form>

            <div> First Name: {inputs.firstName} </div>
            <div> Last Name: {inputs.lastName}</div>
            <div>   Email: {inputs.email}</div>
            <div> Password: {inputs.password}</div>
            <div> Confirm Password: {inputs.confirm_password}</div>
        </>
    );
};

export default UserForm;