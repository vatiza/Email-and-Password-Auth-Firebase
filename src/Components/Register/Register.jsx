import { useState } from "react";


const Register = () => {
    // const [email, setEmail] = useState('');
    // const handleEmailChange = (event) => {
    //     setEmail(event.target.email.value);

    // }

    const handleSubmitForm = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const pass = event.target.password.value;
        console.log(email,pass);

    }
    return (
        <div>
            <h2> Now Register</h2>
            <form onSubmit={handleSubmitForm}>
                <input type="email" name="email" id="email" placeholder="enter email address"></input>
                <br />
                <input type="password" name="password" id="email" placeholder="enter password"></input> <br />
                <input type="submit" value="register" />
            </form>
        </div>
    );
};

export default Register;