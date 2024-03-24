import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
import app from '../firebase/firebase_init_config';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const auth = getAuth(app);
const Registration = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = event => {

        event.preventDefault();
        setSuccess('');
        setError('');
        const email = event.target.email.value;
        const pass = event.target.password.value;
        console.log(email, pass);

        //!password validation check
        if (!/(?=.*?[A-Z])/.test(pass)) {
            setError('Please at last uppercase ');
            return;

        }
        else if (pass.length < 8) {
            setError('Please set the 8 digit');
            return;
        }


        //create user in firebase
        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                event.target.reset();
                setSuccess('Successfully Create Account');
                sendEmailVerify(result.user);
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    }

    const sendEmailVerify = (user) => {
        sendEmailVerification(user)
            .then(result => {
                console.log(result);
                alert('Please verify you email address!');
            })
            .catch(error => {
                console.log(error.message);
            })

    }




    return (
        <div className='mx-auto w-50  '>
            <h4>Please Register </h4>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Terms and Condition" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p><small>Already Have Account? Please<Link to='/login'>Login</Link> </small></p>
            <p className='text-bg-danger '>{error}</p>
            <p className='text-bg-success '>{success}</p>
        </div>
    );
};

export default Registration;