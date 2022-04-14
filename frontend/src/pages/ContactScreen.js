import React, { useEffect } from "react";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.min.css";
import Title from "../components/titles/Title";
import ContactItem from "../components/ContactItem";
import { MainLayout, InnerLayout } from "../styles/Layout";
import { ToastContainer } from "react-toastify";
import TitleComponent from "../components/titles/TitleComponent";
import emailIcon from "../images/question.png";
import ContactForm from "../components/forms/ContactForm";
import { getContact } from "../redux/actions/contactActions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/loaders/Loader";

const ContactScreen = () => {
  const dispatch = useDispatch();

  const contactList = useSelector((state) => state.contactList);
  const { loading, contacts, success, error } = contactList;

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

  return (
    <MainLayout>
      <ToastContainer />
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className="contact-section">
          <div className="left-content">
            <TitleComponent
              title={"Get In Touch"}
              icon={emailIcon}
              margin={"8%"}
              attribute={"Made by Marz-gallery"}
            />
            <ContactForm />
          </div>
          {loading ? (
            <div className="right-content">
              <Loader />
            </div>
          ) : success ? (
            <div className="right-content">
              {contacts.map((item) => (
                <ContactItem
                  key={item._id}
                  icon={item.icon}
                  title={item.title}
                  contact1={item.contact1}
                  contact2={item.contact2}
                />
              ))}
            </div>
          ) : (
            <div className="errorstatus">
              {" "}
              <h1>Contact information not found : {error}</h1>
              <p>Please try again later</p>
            </div>
          )}
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
};

const ContactPageStyled = styled.section`
  .contact-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    .left-content {
      width: 50%;
      margin: 20px;
    }
    .right-content {
      width: 50%;
      margin: 20px;
    }
  }

  @media screen and (max-width: 1200px) {
    .contact-section {
      flex-direction: column;
      .left-content {
        width: 100%;
      }

      .right-content {
        margin-top: 2.8rem;
        width: 100%;
      }
    }
  }
`;

export default ContactScreen;
