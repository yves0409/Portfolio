import React, { useState } from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layout";
import { init } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Title from "../components/Title";
import ContactItem from "../components/ContactItem";
import info from "../data/info";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

init("user_dvXegxEb11cRFMAuFpf6J");

const ContactScreen = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [emailsender, setEmailsender] = useState("");
  const [question, setQuestion] = useState("");

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({ mode: "onBlur", reValidateMode: "onBlur" });
  //const onFormSubmit = (data) => console.log(data);

  const templateParams = {
    from_name: emailsender,
    name: name,
    to_name: "Yves",
    subject: subject,
    message: question,
  };

  //SEND FORM TO EMAIL => 'emailjs'////
  const sendMessage = (form, e) => {
    e.preventDefault();
    setName("");
    setEmailsender("");
    setSubject("");
    setQuestion("");

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      )
      .then(
        function (response) {
          toast.success(`📩 Your message has successfully sent!`, {
            position: toast.POSITION.TOP_RIGHT,
            pauseOnHover: true,
          });
          console.log("SUCCESS!", response.status, response.text);
          console.log(process.env.REACT_APP_SERVICE_ID);
        },
        function (err) {
          toast.error("Your message was not able to be sent");
          console.log(err);
        }
      );
  };

  return (
    <MainLayout>
      <ToastContainer />
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className="contact-section">
          <div className="left-content">
            <div className="contact-title">
              <h4>Get in touch </h4>
            </div>

            <form
              className="form"
              id="contactform"
              onSubmit={handleSubmit(sendMessage)}
            >
              <div className="form-field">
                <label htmlFor="name">
                  Enter name <span className="requiredStar">*</span>
                </label>
                <input
                  className={errors.name ? "err" : ""}
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  {...register("name", { required: "name is required" })}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <span className="errorMessage">Name is required</span>
                )}
              </div>
              <div className="form-field">
                <label htmlFor="name">
                  Enter email <span className="requiredStar">*</span>
                </label>
                <input
                  className={errors.email ? "err" : ""}
                  type="email"
                  id="email"
                  name="email"
                  value={emailsender}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Please enter a valid eeemail",
                    },
                  })}
                  onChange={(e) => setEmailsender(e.target.value)}
                />
                {errors.email && (
                  <span className="errorMessage">
                    Please enter a valid email
                  </span>
                )}
              </div>
              <div className="form-field">
                <label htmlFor="subject">
                  Enter subject <span className="requiredStar">*</span>
                </label>
                <input
                  className={errors.subject ? "err" : ""}
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  {...register("subject", { required: "subject is required" })}
                  onChange={(e) => setSubject(e.target.value)}
                />
                {errors.subject && (
                  <span className="errorMessage">Please enter a subject</span>
                )}
              </div>
              <div className="form-field">
                <label htmlFor="subject">
                  Enter message (Max 150 char){" "}
                  <span className="requiredStar">*</span>
                </label>
                <textarea
                  className={errors.textarea ? "err" : ""}
                  id="textarea"
                  name="question"
                  value={question}
                  {...register("question", {
                    required: "text is required",
                    minLength: 5,
                    maxLength: 150,
                  })}
                  onChange={(e) => setQuestion(e.target.value)}
                ></textarea>
                {errors.question && (
                  <span className="errorMessage">
                    Question has to be min 5 and max 150 characters
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => {
                  clearErrors();
                }}
              >
                Clear Errors
              </button>
              <input type="submit"></input>
            </form>
          </div>

          <div className="right-content">
            {info.map((item) => (
              <ContactItem
                key={item.id}
                icon={item.icon}
                title={item.title}
                contact1={item.contact1}
                contact2={item.contact2}
              />
            ))}
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
};

const ContactPageStyled = styled.section`
  .white-mode {
    text-decoration: none;
    padding: 7px 10px;
    background-color: #122;
    border-radius: 3px;
    color: #fff;
    transition: 0.35s ease-in-out;
    position: fixed;
    left: 15px;
    bottom: 15px;
    font-family: "Montserrat";
  }
  .white-mode:hover {
    background-color: #fff;
    color: #122;
  }
  .footer {
    background-color: white;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 4px;
    background-color: var(--border-color);
    img {
      height: 60px;
      width: 60px;
    }
  }
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 1200px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      padding-top: 3rem;
      width: 100%;
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 90%;
      .form-field {
        margin-top: 0.2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -30px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
          margin-top: 35px;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          margin-top: 20px;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        .err {
          background-color: #cc6699;

          color: white;
        }
        .errorMessage,
        .requiredStar {
          color: red;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          margin-top: 20px;
          color: inherit;
          width: 100%;
          padding: 20px;
        }
      }
    }
  }
  button,
  input[type="submit"] {
    background: #ec5990;
    color: white;
    text-transform: uppercase;
    border: none;
    margin-top: 40px;
    padding: 12px;
    font-size: 12px;
    font-weight: 100;
    letter-spacing: 10px;
    width: 100%;
    border-radius: 4px;
  }
  button {
    display: block;
    appearance: none;
    border-radius: 4px;
    width: 100%;
  }
  input[type="button"]:active,
  input[type="submit"]:active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }

  input:disabled {
    opacity: 0.4;
  }

  input[type="button"]:hover {
    transition: 0.3s all;
  }

  input[type="button"],
  input[type="submit"] {
    -webkit-appearance: none;
  }

  input[type="submit"]:hover {
    background: #bf1650;
  }
  button[type="button"] {
    padding: 5px;
    background: #516391;
    color: white;
    letter-spacing: 0px;
    text-transform: none;
    padding: 10px;
    letter-spacing: 2px;
  }

  button[type="button"]:hover {
    background: black;
    color: white;
  }
`;

export default ContactScreen;
