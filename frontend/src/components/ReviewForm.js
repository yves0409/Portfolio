import React, { useState, useEffect } from "react";
import FormContainer from "./FormContainer";
import { Form } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { IoEnterOutline } from "react-icons/io5";
import { review } from "../redux/actions/reviewActions";
import { useSelector, useDispatch } from "react-redux";
import ModalSubscribeComponent from "./ModalSubscribeComponent";
import Success from "../components/Success";
import Spinners from "../components/Spinners";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const reviewsAdded = useSelector((state) => state.reviewsAdded);
  const { loading, success } = reviewsAdded;

  useEffect(() => {
    if (success) {
      setShowSuccess(!showSuccess);
      setName("");
      setReviewText("");
    }

    setTimeout(() => {
      setShowSuccess(showSuccess);
    }, 3000);
  }, [success]);

  if (success) {
    console.log(success);
  }

  const loginLink = (
    <Link to="/login">
      <IoEnterOutline size={70} />
    </Link>
  );

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(review(name, reviewText));
  };

  const errorTexthandler = () => {
    setShowSubscribe(!showSubscribe);
  };

  return (
    <div className="reviewFormContainer">
      <h1>Write a review</h1>
      {loading && <Spinners />}
      {showSuccess && <Success name="Thank you for submitting your review" />}
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
            className="py-2 bg-info my-2 rounded text-center"
          >
            Submit
          </Button>
        ) : (
          <Button
            type="button"
            className="py-2 bg-info my-2 rounded text-center"
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
    </div>
  );
};

export default ReviewForm;
