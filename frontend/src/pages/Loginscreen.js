import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/actions/userActions";
import Spinners from "../components/loaders/Spinners";
import FormContainer from "../components/forms/FormContainer";
import Alert from "@material-ui/lab/Alert";
import Success from "../components/alerts/Success";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { LockOutlined, UnlockOutlined } from "@ant-design/icons";
import loginLock from "../images/loginlock.ico";
import TitleComponent from "../components/titles/TitleComponent";

const Loginscreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [togglePassword, setTogglePassword] = useState(true);

  const dispatch = useDispatch();

  //STATE ACCESS
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo, error } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/about";

  useEffect(() => {
    const push = history.push;
    userInfo && setTimeout(() => push(redirect), 3000);

    error && push("/login");
  }, [history, userInfo, redirect, loading]);

  //DISPATCH LOGIN ON SUBMIT
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const toggleShowPassword = (e) => {
    e.preventDefault();
    setTogglePassword(!togglePassword);
  };

  return (
    <FormContainer>
      {userInfo ? (
        <h1>Sign In</h1>
      ) : (
        <TitleComponent
          title={"Sign In"}
          img={loginLock}
          margin={"40%"}
          attribute={"icons-by-iconshock"}
        />
      )}

      {userInfo && <Success name={"WELCOME " + userInfo.name} />}
      {error && (
        <Alert severity="error">
          INCORRECT EMAIL OR PASSWORD, PLEASE TRY AGAIN..
        </Alert>
      )}
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
          <div className="input-group">
            <input
              type={togglePassword ? "password" : "text"}
              placeholder="Enter Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="input-group-append">
              <div className="input-group-text" onClick={toggleShowPassword}>
                <VisibilityIcon />
              </div>
            </div>
          </div>
        </Form.Group>
        <Button
          type="submit"
          className={
            userInfo
              ? "py-2 bg-success mt-4 rounded text-center btn-block"
              : "py-2 bg-danger mt-4 rounded text-center btn-block"
          }
        >
          {!userInfo ? <LockOutlined /> : <UnlockOutlined />}
        </Button>
      </Form>
      <Row>
        <Col className="mt-3">
          New User?
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            <span style={{ color: "#26c3e4" }}> SignUp now</span>
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Loginscreen;
