import React, { useState, useEffect } from "react";
import FormContainer from "./FormContainer";
import axios from "axios";
import { Form } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoEnterOutline } from "react-icons/io5";
import ModalSubscribeComponent from "./ModalSubscribeComponent";
import Success from "../components/Success";

const ReviewForm = ({ history }) => {
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (showSuccess) {
      setTimeout(() => setShowSuccess(!showSuccess), 3000);
      setName("");
      setReviewText("");
    }
  }, [showSuccess]);

  const loginLink = (
    <Link to="/login">
      <IoEnterOutline size={70} />
    </Link>
  );

  const submitHandler = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const reviewData = {
      name: name,
      reviewText: reviewText,
    };
    axios.post("/api/review/add", reviewData, config).then((res) => {
      if (res.status === 200) {
        setShowSuccess(!showSuccess);
      }
    });
  };

  const errorTexthandler = () => {
    setShowSubscribe(!showSubscribe);
  };

  return (
    <FormContainer>
      <h1>Write a review</h1>
      {showSuccess && <Success name={"Thank you for submitting your review"} />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Please enter full name"
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
    </FormContainer>
  );
};

export default ReviewForm;
