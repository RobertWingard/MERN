import React, { useState } from 'react';


const UserForm = (props) => {
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirm_password, setConfirmPassword] = useState("");
    // const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    // const [error, setError] = useState("");

    const[inputs,setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirm_password: "",
        hasBeenSubmitted: "",
    })

    const[formError, setError] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirm_password: "",
        hasBeenSubmitted: "",
    })

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
        if(e.target.value.length < 3){
            setError({
                ...formError,
                [e.target.name]: "must be more than 3"
            })
        }else{
            setError({
                ...formError,
                [e.target.name]: ("")
            })
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
                    <input name="firstName" type="text" onChange={handleChange} value={inputs.firstName} />
                    {
                        <p style={{ color: 'red' }}>{formError.firstName}</p>
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input name="lastName" type="text" onChange={handleChange} value={inputs.lastName} />
                    {
                        formError.lastName ? <p style={{ color: 'red' }}>{formError.lastName}</p> : ''
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input name="email" type="text" onChange={handleChange} value={inputs.email} />
                    {
                        formError.email ? <p style={{ color: 'red' }}>{formError.email}</p> : ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input name= "password" type="password" onChange={handleChange} value={inputs.password} />
                    {
                        formError.password ? <p style={{ color: 'red' }}>{formError.password}</p> : ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input name= "confirmPassword" type="password" onChange={handleChange} value={inputs.confirm_password} />
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