import {ChangeEvent, useState} from "react";

const AddUser = () => {
    const [userDetails, setUserDetails] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [userDetailsValid, setUserDetailsValid] = useState({
        username: true,
        email: true,
        password: true
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserDetails({...userDetails, [event.target.name]: event.target.value,})
    }

    const validate = () => {
        setUserDetailsValid({
            username: userDetails.username != "",
            email: userDetails.email != "",
            password: userDetails.password != ""
        })
    }

    const handleSubmit = () => {
        validate();
    }

    return (
        <div className="form">
            <div className="field">
                <label className="label" htmlFor="username">Username: </label>
                <input className="input" type="text" name="username" id="username" value={userDetails.username} onChange={handleChange}/>
                {!userDetailsValid.username && <p className="error">Enter valid username</p>}
            </div>

            <div className="field">
                <label className="label" htmlFor="email">Email: </label>
                <input className="input" type="email" name="email" id="email" value={userDetails.email} onChange={handleChange}/>
                {!userDetailsValid.email && <p className="error">Enter valid email id</p>}
            </div>

            <div className="field">
                <label className="label" htmlFor="password">Password: </label>
                <input className="input" type="password" name="password" id="password" value={userDetails.password}
                       onChange={handleChange}/>
                {!userDetailsValid.password && <p className="error">Enter valid password</p>}
            </div>

            <div className="actions">
                <button className="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default AddUser;
