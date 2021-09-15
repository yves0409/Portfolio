import React,{useState,useEffect} from 'react'
import { InnerLayout, MainLayout } from '../styles/Layout'
import Title from '../components/Title'
import PortfolioCard from '../components/PortfolioCard'
import PortfolioButton from '../components/PortfolioButton'
import styled from "styled-components"
import axios from "axios"
import LinearProgress from '@material-ui/core/LinearProgress';


const PortfolioScreen = () => {
    const [portfolios,setPortfolios] = useState([]);
    const [menuItem,setMenuItem] = useState(portfolios);
    const [loader,setLoader] = useState(true);
    
    const button = ["All",...new Set(portfolios.map(item => item.category))]
   
  

    useEffect(()=> {
      axios.get("/api/portfolio")
       .then(response => {
          const {data} = response;
           setPortfolios(data)
           setMenuItem(data) 
           data  && setLoader(false)
              }).catch((error) => {
          console.log(error);
        })
     },[])
   
    const filter = (button)=> {
        if(button === 'All'){
            setMenuItem(portfolios)
            return
               }
        const filteredData = portfolios.filter((item)=>item.category === button )
        setMenuItem(filteredData)
      }
       

return (
   <MainLayout>
        <CardStyled>
            <Title title={"Portfolios"} span={"Portfolios"}/>
            <InnerLayout>
                <PortfolioButton filter={filter} button={button}/>
                {loader ? ( <LinearProgress color="primary" /> ): (
                <PortfolioCard menuItem={menuItem}/>)}
            </InnerLayout>
        </CardStyled>
   </MainLayout>
        )
}

const CardStyled = styled.div`
.portfolio{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    grid-column-gap:2rem;
    grid-row-gap:3rem;
    @media screen and (max-width:1300px){
     grid-template-columns:repeat(1,1fr);
     width:70%;
     margin:0 auto;
     }
     @media screen and (max-width:900px){
     width:100%;
     margin:0 auto;
     padding:0;
     }        
   }
`
export default PortfolioScreen
