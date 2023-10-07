import React, { useState } from "react";
import Helmet from "../components/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";

const Login = () => {
  const [email,setEmail] = useState('user1@gmail.com')
  const [password,setPassword] = useState('--password')
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
     const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
     );
     const user = userCredential.user;
  
     console.log(user);
     setLoading(false);
     toast.success("Successfully loged in");
     navigate('/checkout')
    } catch (error) {
     setLoading(false);
     toast.error("Something went wrong");
    }
   };
 return (
  <Helmet title="Login">
    <section className="login-page">
   <Container>
    <Row className="mt-5 justify-content-center">
    {loading ? (
       <Col className="text-center" lg="12">
        <h5 className="fw-bold">Loading.....</h5>
       </Col>
      ) : (
        <Col lg="6">
        <h1 className="text-center">Login</h1>
        <Form className="login-form" onSubmit={signIn}>
         <FormGroup>
          <Input placeholder="Enater your email" type="email" value={email} onChange={e=> setEmail(e.target.value)} required />
         </FormGroup>
         <FormGroup>
          <Input placeholder="Enter your password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
         </FormGroup>
         <div className="text-center">
         <button type="submit" className="auth-btn btn">Login</button>
         <p>Don't have an account?
         <Link to={'/signup'}>Create new account</Link>
         </p>
         </div>
        </Form>
       </Col>
      )}
    </Row>
   </Container>
    </section>
  </Helmet>
 );
};

export default Login;
