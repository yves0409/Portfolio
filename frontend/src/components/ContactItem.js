import React from "react";
import styled from "styled-components";

const ContactItem = ({ icon, title, contact1, contact2 }) => {
  return (
    <ContactItemStyled>
      <div className="icon">
        <img
          src={icon}
          alt="created by Gregor Cresnar,Icon made by Freepik,Icon made by pixel perfect"
        />
      </div>

      <div className="contactinfo">
        <h6>{title}</h6>
        <p>{contact1}</p>
        <p>{contact2}</p>
      </div>
    </ContactItemStyled>
  );
};

const ContactItemStyled = styled.div`
  padding: 1rem;
  border-radius: 6px;
  background-color: var(--background-dark-color-2);
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1.5rem;
  text-align: center;

  @media screen and (max-width: 470px) {
    flex-direction: column;
    align-items: center;
  }
  .icon {
    padding: 1.2rem;
    border: 1px solid var(--border-color);
    border-radius: 50%;
    background-color: darkgrey;

    img {
      width: 40px;
      height: 40px;
    }
  }
  .contactinfo {
    h6 {
      color: var(--white-color);
      font-size: 1.2rem;
      padding-bottom: 0.6rem;
      align-items: left;
      margin-top: 2rem;
    }
  }
`;
export default ContactItem;
