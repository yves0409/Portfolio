import React ,{ useState}from 'react'
import styled from "styled-components"
import {MainLayout,InnerLayout} from "../styles/Layout"
import { init } from 'emailjs-com';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import Title from '../components/Title'
import ContactItem from '../components/ContactItem'
import info from "../data/info"
import emailjs from 'emailjs-com';
import SendIcon from '@material-ui/icons/Send';

init("user_dvXegxEb11cRFMAuFpf6J");

const ContactScreen = () => {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [emailsender, setEmailsender] = useState('');
    const [question, setQuestion] = useState('');

  
 const templateParams = {
          from_name: emailsender,
          name: name,
          to_name:"Yves",
          subject: subject,
          message: question
        };


//SEND FORM TO EMAIL => 'emailjs'////  
const sendMessage = (e) => {
    e.preventDefault();
        setName("");
        setEmailsender("");
        setSubject("");
        setQuestion("");
   
    emailjs.send(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID,templateParams,process.env.REACT_APP_USER_ID)
     .then(
              function(response) {
                  toast.success("📩 Your message has successfully sent!", {
                  position: toast.POSITION.TOP_RIGHT,
                  pauseOnHover: true
               })
                  console.log("SUCCESS!", response.status, response.text);
                  console.log(process.env.REACT_APP_SERVICE_ID);
              },
              function(err) {
                  toast.error("Your message was not able to be sent");
                  console.log(err);
              })
        };


return (
        <MainLayout>
        <ToastContainer/>
            <Title title={"Contact"} span={"Contact"}/>
            <ContactPageStyled>
            <InnerLayout className="contact-section">
                <div className="left-content">
                    <div className="contact-title">
                        <h4>Get in touch  </h4>
                        
                    </div>
                        <form className="form" id="contactform"   >
                                <div className="form-field">
                                    <label htmlFor="name">Enter name</label>
                                    <input type="text" id="name" name="name" value={name} required onChange={(e)=>setName(e.target.value)}/>
                                </div>
                                    <div className="form-field">
                                        <label htmlFor="name">Enter email</label>
                                        <input type="email" id="email" name="email" value={emailsender}  onChange={(e)=> setEmailsender(e.target.value)}/>
                                    </div>
                                        <div className="form-field">
                                            <label htmlFor="subject">Enter subject</label>
                                            <input type="text" id="subject" name="subject" value={subject} onChange={(e)=> setSubject(e.target.value)}/>
                                        </div>
                                    <div className="form-field">
                                    <label htmlFor="subject">Enter message</label>
                                           <textarea  id="textarea" cols="30" rows="10" name="question" value={question} onChange={(e)=> setQuestion(e.target.value)}></textarea>
                                    </div>
                                <div className="form-field" >
                                    <div className="iconbtn" data-toggle="tooltip" data-placement="bottom" title="send email">
                                       <SendIcon onClick={sendMessage} />
                                    </div>
                                 </div>
                         </form>
                </div>
                <div className="right-content">
                
                    {info.map(item => <ContactItem 
                    key={item.id} 
                    icon={item.icon} 
                    title={item.title} 
                    contact1={item.contact1} 
                    contact2={item.contact2} 
                    />)}
                      
                </div>
            </InnerLayout>
           </ContactPageStyled>  
         </MainLayout>
    )
}

const ContactPageStyled = styled.section`
.footer{
    background-color:white;
    padding:1rem;
    display: flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:space-around;
    align-items: center;
    border-radius:4px;
    background-color:var(--border-color);
    img{
        height:60px;
        width:60px;
    }
}
.contact-section{
   display:grid;
   grid-template-columns:repeat(2,1fr);
   grid-column-gap:2rem;
   @media screen and (max-width:1200px){
   grid-template-columns:repeat(1,1fr);
   };
.right-content{
   display:grid;
   grid-template-columns:repeat(1,1fr);
   padding-top:3rem;
   width:100%;
   
   }
.contact-title{
     h4{
   color: var(--white-color);
   padding:1rem 0;
   font-size:1.8rem;
       }
   }
.form{
   width:90%;
.form-field{
   margin-top:.2rem;
   position:relative;
   width:100%;
label{
   position:absolute;
   left: 20px;
   top: -30px;
   display: inline-block;
   background-color: var(--background-dark-color);
   padding: 0 .5rem;
   color:inherit;
   margin-top:35px;
   }
input{
   border:1px solid var(--border-color);
   outline: none;
   background: transparent;
   margin-top:20px;
   height: 50px;
   padding: 0 15px;
   width: 100%;
   color: inherit;
   }
textarea{
   background-color:transparent;
   border:1px solid var(--border-color);
   outline:none;
   margin-top:20px;
   color: inherit;
   width: 100%;
   padding:20px;
   }
.iconbtn{
  cursor:pointer;
  font-size: 20px;
  color: var(--icon-green-color)
      }
    }
  } 
}
`
export default ContactScreen



