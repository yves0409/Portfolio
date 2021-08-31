import React,{useState,useEffect} from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import coding from "../images/codingresize.jpeg"
import downloadCV from "../images/download.png"
import cv from "../../src/data/cv.pdf";
import axios from "axios"
import LinearProgress from '@material-ui/core/LinearProgress';


const ImageSection = () => { 
    const[aboutInfo,setAboutInfo]= useState('')
  
    useEffect(()=> {
        async function getResults(){
           const results = await axios.get("/api/info")
           setAboutInfo(results.data[0])
           }
        getResults()
        },[])


return (
        aboutInfo ? (
      <ImageSectionStyled>
          <div className="left-content">
              <img src={coding} alt="res" />
          </div>
          <div className="right-content">
                <h4>I'm <span>Yves</span></h4> 
                <p className="about-paragraph">{aboutInfo.bio}</p>
                  <div className="about-info">
                    <div className="info-title">
                        <p>Full Name : <span>{aboutInfo.first_name} {aboutInfo.last_name}</span></p>
                        <p>Languages : <span>{aboutInfo.languages}</span></p>
                        <p>Location : <span>{aboutInfo.location}</span></p>
                        <p>Service : <span>{aboutInfo.services}</span></p>
                    </div>
                  </div>
                    <Link to={cv} target="_blank" download><img src={downloadCV} alt="Freepic" /></Link>
                    <p className="downloadResumeText">Resume</p>
                  
          </div>
          </ImageSectionStyled>): (<LinearProgress color="primary"/> )
         )
}

const ImageSectionStyled = styled.div`
       margin-top:4rem;
       display: flex;
 @media screen and (max-width:1700px){
       flex-direction:column;
 .left-content{
       margin-bottom:2rem;
     }
 }
 .left-content{
       width:100%;
       margin-right:1rem;
 img{
      width:100%;
      height:100%;
      object-fit:cover;
      }
 }
 .right-content{
 img{
      cursor: pointer;
      width:70px;
      height:70px;
      padding:5px;
      border:1px solid var(--icon-green-color);
      border-radius:6px;
 }
 .downloadResumeText{
     color: var(--icon-green-color);
     margin-left:.4rem;
     text-decoration:underline;
     text-decoration-color: var(--icon-green-color);
     text-decoration-thickness: 3px;
 }
 h4{
     font-size:2rem;
     color:var(--white-color);
 span{
     font-size:2rem;
    }
 }
 .about-paragraph{
     padding:1rem 0;
     font-size:.9rem;
       }
 .about-info{
     display: flex;
     padding-bottom:1.4rem;
 }
 .info-title{
     padding-right:3rem;
 p{
     font-size:1rem;
     font-weight:200;
    }
    span {
    font-size:1rem;
    padding:.3rem 0;
    color:grey;
    }
 }
}
`

export default ImageSection