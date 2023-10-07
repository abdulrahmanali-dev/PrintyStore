import React, { useState } from "react";
import Helmet from "../components/Helmet";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
// firebase lib
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";

const Signup = () => {
 const [username, setUsername] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [file, setFile] = useState(null);
 const [loading, setLoading] = useState(false);
 const navigate = useNavigate();
 // signup function
 const signup = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
   const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
   );
   const user = userCredential.user;
   setLoading(false);
   toast.success("Account created");
   navigate('/login')
  } catch (error) {
   setLoading(false);
   toast.error("Something went wrong");
  }
 };
 return (
  <Helmet title="Sign up">
   <section className="login-page">
    <Container>
     <Row className="mt-5 justify-content-center">
      {loading ? (
       <Col className="text-center" lg="12">
        <h5 className="fw-bold">Loading.....</h5>
       </Col>
      ) : (
       <Col lg="6">
        <h1 className="text-center">Sign up</h1>
        <Form className="login-form" onSubmit={signup}>
         <FormGroup>
          <Input
           placeholder="Username"
           type="text"
           value={username}
           onChange={(e) => setUsername(e.target.value)}
           required
          />
         </FormGroup>
         <FormGroup>
          <Input
           placeholder="Enater your email"
           type="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           required
          />
         </FormGroup>
         <FormGroup>
          <Input
           placeholder="Enter your password"
           type="password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           required
          />
         </FormGroup>
         <FormGroup>
          <Input
           type="file"
           value={file}
           onChange={(e) => setFile(e.target.value)}
          />
         </FormGroup>
         <div className="text-center">
          <button type="submit" className="auth-btn btn">
           Create an account
          </button>
          <p>
           Already have an account?
           <Link to={"/login"}>Login</Link>
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

export default Signup;
