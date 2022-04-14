import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { IoEnterOutline } from "react-icons/io5";
import { review } from "../../redux/actions/reviewActions";
import { useSelector, useDispatch } from "react-redux";
import ModalSubscribeComponent from "../modals/ModalSubscribeComponent";
import Success from "../alerts/Success";
import Spinners from "../loaders/Spinners";
import Alert from "@material-ui/lab/Alert";
import writeReview from "../../images/writereview.png";
import TitleComponent from "../titles/TitleComponent";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const dispatch = useDispatch();

  //STATE ACCESS
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const reviewsAdded = useSelector((state) => state.reviewsAdded);
  const { loading, success, err } = reviewsAdded;

  useEffect(() => {
    if (success) {
      setShowSuccess(!showSuccess);
      setName("");
      setReviewText("");
    }

    //SHOW SUCCESS COMPONENT FOR 3 SECONDS
    setTimeout(() => {
      setShowSuccess(showSuccess);
    }, 3000);
  }, [success]);

  //LINK IN MODALBODY THAT REDIRECTS USER TO LOGIN PAGE
  const loginLink = (
    <Link to="/login">
      <IoEnterOutline size={70} />
    </Link>
  );

  //SUBMIT THE REVIEW FORM
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(review(name, reviewText));
  };

  //WHEN USER IS NOT LOGGED IN , SHOW MODAL TO LOGIN
  const errorTexthandler = () => {
    setShowSubscribe(!showSubscribe);
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center mt-5">
        <Col sm={12} md={10} lg={8}>
          <TitleComponent
            title={"Write a review"}
            img={writeReview}
            margin={"20%"}
            attribute={"Made by kidaubis"}
          />

          {loading && <Spinners />}
          {showSuccess && (
            <Success name={`Thank you ${userInfo.name} for your review`} />
          )}
          {err && (
            <Alert severity="error">
              ONE OF THE FIELDS IS INVALID, PLEASE TRY AGAIN..
            </Alert>
          )}

          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="reviewText">
              <Form.Label></Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Write your review"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
            </Form.Group>
            {userInfo ? (
              <Button
                type="submit"
                className="py-2 bg-danger mt-4 rounded text-center btn-block"
              >
                Submit
              </Button>
            ) : (
              <Button
                className="py-2 bg-danger mt-4 rounded text-center btn-block"
                onClick={errorTexthandler}
              >
                Submit
              </Button>
            )}
            {showSubscribe && (
              <ModalSubscribeComponent
                title={"Please Login to write a review !"}
                closebtnTxt={" Close"}
                body={loginLink}
              />
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewForm;
