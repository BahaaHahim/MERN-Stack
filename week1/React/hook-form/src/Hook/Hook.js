import React, { useState } from  'react';

const Hook = (props)=> {
    const [username ,setUsername] = useState("");
    const [userNameError , setUsertNameError] = useState("");
    const [email ,setEmail] = useState("");
    const [emailerror, setEmailError] = useState("");
    const [password ,setPassword] = useState("");
    const [passworderror, setPasswordEror] = useState("");
    const [confirmPass ,setConfirmPass] = useState("");
    const [confirmError, setConfirmError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password ,confirmPass };
    };
    const handelUserName = (e) =>{
        setUsername(e.target.value);
        if(e.target.value.length <1){
            setUsertNameError("This feild is requierd");
        }else if(e.target.value.length <2){
            setUsertNameError("User Name must be at least 2 charachters!");
        }else{ 
            setUsertNameError("");
        }
    }
    const handelEmail = (e) => {
        setEmail(e.target.vlaue);
        if(e.target.value.length <1){
            setEmailError("this field is required!");
        }else if (e.target.value.length < 5){
            setEmailError("field must be at lease 5 characters!")
        } else{
            setEmailError("");
        }
    }
    const handelPassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length <1){
            setPasswordEror("this field is required!");
        }else if(e.target.value.length<8){
            setPasswordEror("this field must be least 8 charachters!");
        }else{
            setPasswordEror("");
        }
    }
    const handelConfirmPass = (e) => {
        setConfirmPass(e.target.value);
        if (e.target.value != password){
            setConfirmError("the passwords must match");    
        }else{
            setConfirmError("");
        }
    }

    
    return (
        <div>
            <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={handelUserName}  />
                {
                    userNameError?
                    <p>{userNameError}</p>:'' 
                }
                
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={handelEmail}  />
                {
                    emailerror?
                    <p>{emailerror}</p>:'' 
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ handelPassword} />
                {
                    passworderror?
                    <p>{passworderror}</p>:'' 
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ handelConfirmPass }  />
                {
                    confirmError?
                    <p>{confirmError}</p>:'' 
                }
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
