import React from "react";
import styled from "styled-components";

const ContactItem = ({ icon, title, contact1, contact2 }) => {
  return (
    <ContactItemStyled>
      <div className="left-content">
        <img
          src={icon}
          alt="created by Gregor Cresnar,Icon made by Freepik,Icon made by pixel perfect"
        />
      </div>

      <div className="right-content">
        <h6>{title}</h6>
        <p>{contact1}</p>
        <p>{contact2}</p>
      </div>
    </ContactItemStyled>
  );
};

const ContactItemStyled = styled.div`
  padding-left: 1rem;
  padding-right: 0.5rem;
  border-radius: 6px;
  background-color: var(--background-dark-color-2);
  display: flex;
  align-items: center;

  margin-bottom: 1.5rem;

  .left-content {
    padding: 1.2rem;
    border: 1px solid var(--border-color);
    border-radius: 50%;
    background-color: darkgrey;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.2rem;

    img {
      width: 40px;
      height: 40px;
    }
  }
  .right-content {
    margin-left: 2rem;
    margin-bottom: 1rem;
    h6 {
      color: var(--white-color);
      font-size: 1.2rem;
      padding-bottom: 0.6rem;
    }
    p {
      padding: 0.1rem 0;
    }
  }
`;
export default ContactItem;
