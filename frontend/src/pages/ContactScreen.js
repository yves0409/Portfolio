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

const ContactScreen = () => {
  const dispatch = useDispatch();

  const contactList = useSelector((state) => state.contactList);
  const { loading, contacts, success, error } = contactList;

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

  console.log(contacts);

  return (
    <MainLayout>
      <ToastContainer />
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className="contact-section">
          <div className="left-content">
            <TitleComponent
              title={"Get In Touch"}
              img={emailIcon}
              margin={"8%"}
              attribute={"Made by Marz-gallery"}
            />
            <ContactForm />
          </div>
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
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
};

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;

    @media screen and (max-width: 1200px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .right-content {
      margin-top: 2rem;
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
  }
`;

export default ContactScreen;
