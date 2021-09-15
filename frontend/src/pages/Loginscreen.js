import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import Notification from "../components/Notification";
import Spinners from "../components/Spinners";
import FormContainer from "../components/FormContainer";
import Alert from "@material-ui/lab/Alert";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/actions/userActions";
import swal from 'sweetalert';
 





const Loginscreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  swal({
    title: "Undergoing Maintenance",
    text: "While you can register and login, Most functionality will be limited until further notice",
    icon: "warning",
    dangerMode: true,
    
  })
  .then(willDelete => {
    if (willDelete) {
      swal("Done!", "You can now login or signup!", "success");
    }
  });


  const dispatch = useDispatch();

  //GETTING THE STATE
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo, error } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    const push = history.push;
   if (userInfo ) {
     setTimeout(() => push(redirect), 2000);
    }if(error){
       push("/login")
    }
   
   }, [history, userInfo, redirect, loading]);

  //DISPATCH LOGIN ON SUBMIT
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
   };

return (
    <FormContainer>
      <h1>Sign In</h1>
      {userInfo && <Alert severity="success">LOGIN SUCCESSFUL !</Alert>}
      {/* {error && <Notification  variant="danger">INCORRECT EMAIL OR PASSWORD, PLEASE TRY AGAIN..</Notification> } */}
      {error && <Alert severity="error">INCORRECT EMAIL OR PASSWORD, PLEASE TRY AGAIN..</Alert> }

      {loading && <Spinners />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Adress</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
         
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" className="py-2 bg-info my-2 rounded text-center">
          Submit
        </Button>
      </Form>
      <Row className="py-3 bg-info my-2 rounded text-center">
        <Col>
         <span className="text-dark "> New User?{" "}</span>
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            <span className="text-dark" >SignUp now</span>
          </Link>
        </Col>
      </Row>
     
    </FormContainer>
  );
};

export default Loginscreen;