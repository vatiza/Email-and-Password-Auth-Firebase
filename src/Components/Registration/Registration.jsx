import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase_init_config';

const auth = getAuth(app);
const Registration = () => {

    const handleRegister = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const pass = event.target.password.value;
        console.log(email, pass);

        //create user in firebase
        createUserWithEmailAndPassword(auth, email, pass)
            .then(resutl => {
                const loggedUser = resutl.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error)
            })
    }




    return (
        <div className='mx-auto w-50  '>
            <h4>Please Register </h4>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" name='email' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Terms and Condition" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Registration;