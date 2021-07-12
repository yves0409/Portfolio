import React from 'react'
import styled from "styled-components"
import ReviewItem from './AboutReviewItem'
import {InnerLayout} from "../styles/Layout"
import Title from './Title'


const AboutReviewSection = () => {
    return (
        <AboutReviewSectionStyled>
            <Title title={"Reviews"} span={"Reviews"}/>
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem text={"Some random text here that i will change"}/>
                    <ReviewItem text={"Some random text here that i will change,and some more text to be changed"}/>
                </div>
            </InnerLayout>
        </AboutReviewSectionStyled>
      )
}

const AboutReviewSectionStyled = styled.section`
    padding-top:3.5rem;
.reviews{
    display: grid;
    grid-template-columns:repeat(2,1fr);
    grid-gap:1.5rem;
    @media screen and (max-width:650px){
    grid-template-columns:repeat(1,1fr);
        };
      }
`;

export default AboutReviewSection