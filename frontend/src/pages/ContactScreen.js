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
                                    <input type="text" id="name" name="name" value={name} required minLength="6" maxLength="8" onChange={(e)=>setName(e.target.value)}/>
                                </div>
                                    <div className="form-field">
                                        <label htmlFor="name">Enter email</label>
                                        <input type="email" id="email" name="email" value={emailsender} onChange={(e)=> setEmailsender(e.target.value)}/>
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
                        {/* change */}
                        {/* <div class="container">
	<div className="front side">
		<div className="content">
			<h1>Yves Loeys</h1>
			<p>specialised in front end web design, user experience and creating identities. Throughout my career, I have worked with companies of all shapes and sizes that enriched my experience
			</p>
		</div>
	</div>
	<div className="back side">
		<div className="content">
			<h1>Contact Me</h1>
			<form>
				<label>Your Name :</label>
				<input type="text" placeholder="Yves Loeys"/>
				<label>Your E-mail :</label>
				<input type="text" placeholder="yves.loeys@mail.com"/>
				<label>Your message :</label>
				<textarea placeholder="Subject"></textarea>
				<input type="submit" value="Done"/>
			</form>
		</div>
	</div> */}
{/* change */}
{/* </div> */}
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
/* .container {
	min-width: 700px;
	min-height: 350px;
	border-radius: 20px;
	position: relative;
	-webkit-transition: 1.5s ease-in-out;
	transition: 1.5s ease-in-out;
	transform-style: preserve-3d;
}

.side {
	position: absolute;
	text-align: center;
	width: 100%;
	height: 100%;
	padding: 20px 50px;
	color: #fff;
	transform-style: preserve-3d;
	backface-visibility: hidden;
	border-radius: 20px;
}
.content {
	transform: translatez(70px) scale(0.8);
	line-height: 1.5em;
}
.content h1 {
	position: relative;
}
.content p {
	margin-top: 50px;
	line-height: 2em;
}
.content h1:before {
	content: "";
	position: absolute;
	bottom: -20px;
	height: 3px;
	background-color: #3e3;
	width: 70px;
	left: 50%;
	transform: translateX(-50%);
}
.front {
	z-index: 0;
	background-size: 100vh;
	background-size: cover;
	background-image: url(https://livewallpaperhd.com/wp-content/uploads/2017/07/Dark-Elegant-Wallpaper.jpg);
}
.back {
   
	background-color: #333;
	transform: rotateY(180deg);
	z-index: 0;
	padding-top: 10px;
	background-image: url(https://userscontent2.emaze.com/images/f9538183-0ff9-478f-b964-c8ab90421e3b/3d28e192fda5c17250f96a2779c84475.jpg);
}
.container:hover {
	-webkit-transform: rotateY(180deg);
	transform: rotateY(180deg);
    
}
form {
	text-align: left;
}
.back h1 {
	margin: 0;
}
form label,
form input {
	display: block;
}
form input,
form textarea {
	background: transparent;
	border: 0;
	border-bottom: 2px solid #444;
	padding: 5px;
	width: 100%;
	color: #fff;
}
form label {
	margin: 15px 0;
}
form input[type="submit"] {
	display: block;
	width: auto;
	margin: 10px auto;
	padding: 5px 10px;
	border: 3px solid #555;
	border-radius: 4px;
	color: #fff;
	cursor: pointer;
} */
/* my button style  */
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
   /* :hover{
     background-color:white;
     opacity:.4;
   } */
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



