import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [cpassword, setcpassword] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname,lastname, email, password,cpassword };
        console.log("Welcome", newUser);
    };
    
    return(
      <>
      <form onSubmit={ createUser }>
            <div>
                <label>first name: </label> 
                <input type="text" onChange={ (e) => setfirstname(e.target.value) } />
            </div>
            <div>
                <label>last name: </label> 
                <input type="text" onChange={ (e) => setlastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>confirm Password: </label>
                <input type="text" onChange={ (e) => setcpassword(e.target.value) } />
            </div>

        </form>
        <h1>First Name :{firstname}</h1>
        <h1>Last Name :{lastname}</h1>
        <h1>Email :{email}</h1>
        <h1>password :{password}</h1>
        <h1>Confirm Password :{cpassword}</h1>

        </>

    );
};
    
export default UserForm;