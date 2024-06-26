
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../firebase/firebase_init_config';
import { Link } from 'react-router-dom';

const auth = getAuth(app);
const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef();
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pass = form.password.value;
        console.log(email, pass);
        setError('');
        setSuccess('');


        //!login
        signInWithEmailAndPassword(auth, email, pass)
            .then(result => {
                const login = result.user;
                setSuccess('Successfully login');
                console.log(login);
                setError('');

            })
            .catch(error => {
                setError(error.message);
            });
    }
    const handlerestPassword = event => {
        const email = (emailRef.current.value);
        if (!email) {
            alert('Please provide you email address');
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {

                alert("Password reset email sent!")
            })
            .catch(error => {
                console.log(error);
                setError(error);
            })
    }
    return (

        <div>
            <div className='mx-auto w-50  '>
                <h4>Please Login </h4>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="email" name='email' ref={emailRef} placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <p><small>Fotget Password? Please <button onClick={handlerestPassword} className='btn btn-link'>Reset Password</button></small></p>
                <p><small>Don't Have Account? Create a new<Link to='/regisRBS'>account</Link> </small></p>
                <p className='text-danger '>{error}</p>
                <p className='text-primary '>{success}</p>

            </div>
        </div>
    );
};

export default Login;