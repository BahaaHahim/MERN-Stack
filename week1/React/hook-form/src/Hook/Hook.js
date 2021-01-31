import React, { useState } from  'react';

function Hook() {
    const [username ,setUsername] = useState("");
    const [email ,setEmail] = useState("");
    const [password ,setPassword] = useState("");
    const [confirmPass ,setConfirmPass] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password ,confirmPass };

    }
    return (
        <div>
            <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value)}  />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) }  />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmPass(e.target.value) }  />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <p>Your Form Data</p>
        <p>User Name: {username}</p>
        <p>Email: {email}</p>
        <p>Password : {password}</p>
        <p>Confirm Password: {confirmPass}</p>


            
        </div>
    )
}
export default Hook;
