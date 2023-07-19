import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postLogin } from "../reducers/apiSlice";



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const loginPayload = {
            email: email,
            password: password
        };

        dispatch(postLogin(loginPayload));
    }

    return (
        <Container className="new-blog-container">
            <Form className="mt-5" onSubmit={handleSubmit}>
                <Form.Group controlId="blog-form" className="mt-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control size="lg" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="blog-form" className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control size="lg" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">Login</Button>
            </Form>
        </Container>

    )
};
export default Login;
