import React, { useState, useEffect } from "react";
import Notification from "../components/Notification";
import Spinners from "../components/Spinners";
import FormContainer from "../components/FormContainer";
import { Link } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../redux/actions/userActions";
import Success from "../components/Success";
import registerImage from "../images/Register.png";
import TitleComponent from "../components/TitleComponent";

const Registerscreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  //GETTING THE STATE
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    const push = history.push;
    userInfo && setTimeout(() => push(redirect), 3000);
  }, [history, userInfo, redirect]);

  //DISPATCH REGISTER ON SUBMIT
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do no match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <FormContainer>
      <TitleComponent title={"Sign Up"} img={registerImage} margin={"20%"} />

      {userInfo && <Success name={"WELCOME " + userInfo.name} />}
      {message && <Notification variant="danger">{message}</Notification>}
      {error && <Notification variant="danger">{message}</Notification>}

      {loading && <Spinners />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
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
        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button
          type="submit"
          className="py-2 bg-danger mt-4 rounded text-center btn-block"
        >
          Register
        </Button>
      </Form>
      <Row className="py-3 rounded">
        <Col>
          Already have an account ?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            <span style={{ color: "#26c3e4" }}>Login</span>
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Registerscreen;
