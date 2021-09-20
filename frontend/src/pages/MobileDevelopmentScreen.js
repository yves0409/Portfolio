import React from 'react'
import { MainLayout } from '../styles/Layout'
import Title from '../components/Title'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import styled from "styled-components"

const MobileDevelopmentScreen = () => {
    return (
         <MainLayout>
         <div>
            <Title title={"Mobile Development"} span={"Mobile Development"}/>
            <h1 style={{marginTop:"6rem"}}>Coming soon ...</h1>


        </div>
        <SubscribeStyled>
            <p>Subscribe</p>
            <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
        </SubscribeStyled>


        </MainLayout>
    )
         
        
}

const SubscribeStyled = styled.div`
   p{
       color:white;
       margin-top: 3rem;
   }
   input{
       margin-right: 16px;
       font-size:1.3rem;
   }
   button{
       padding: 6px 10px;
       font-size:16px;
       border-radius: 6px;
   }

`

export default MobileDevelopmentScreen
