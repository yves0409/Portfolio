import React,{useState,useEffect} from 'react'
import styled from "styled-components"
import { InnerLayout} from '../styles/Layout'
import Title from './Title'
import SmallTitle from './SmallTitle'
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter"
import BackgroundItem from './ServiceBackgroundItem'
import axios from "axios"
import LinearProgress from '@material-ui/core/LinearProgress';

const ServiceBackGroundSection = () => {
  const briefcase = <BusinessCenterIcon/>
  const[backgroundInfo,setBackgroundInfo]= useState([])
 
  
  
  useEffect(()=> {
      axios.get(`${process.env.REACT_APP_API}/background`)
        .then(response => {
          const {data} = response;
          setBackgroundInfo(data)
        }).catch((error) => {
          console.log(error);
        })
   },[])
  
    console.log(backgroundInfo);
  return (
    <BackGroundSectionStyled>
         <Title title={"background"} span={"background"}/>
         <InnerLayout>
            <div className="small-title">
                <SmallTitle icon={briefcase} title={"Working Experience"}/>
            </div>
            <div className="Background-content">
                {backgroundInfo ? backgroundInfo.map(item => <BackgroundItem 
                key={item._id} 
                year={item.year} 
                title={item.title} 
                subtitle={item.subtitle} 
                text={item.text}/>) : <LinearProgress color="primary" />}
            </div>
         </InnerLayout>
    </BackGroundSectionStyled>
  )
}

const BackGroundSectionStyled = styled.div`
.small-title{
    padding-bottom:2.5rem;
}
.Background-content{
    border-left:2px solid var(--border-color); 
}
`
export default ServiceBackGroundSection
