import React ,{useState,useEffect}from 'react';
import axios from 'axios';
import {PortfolioItem,Span,PortfolioList,PortfolioSection,PortfolioTitle,DivBox,ImgBox,Overlay,OverlaySpan} from './style.js';

const  Portfolio=()=> {
    const[images,setImages]=useState([]);
    useEffect(()=>{
    axios.get('js/data.json').then(res =>{
        console.log(res.data.portfolio);
        setImages(res.data.portfolio);
        
    
    })
    },[])
    // const images=images;
    const imagesList=images.map((img)=>{
        return(
            <DivBox key={img.id}>
            
           
            <ImgBox src={img.image} alt=""/>
            <Overlay>
                <OverlaySpan>
                    Show Image
                    </OverlaySpan>
                
                    </Overlay>
       
    </DivBox>

        )
        })
    return (
        <PortfolioSection>
        <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
        <PortfolioList>
            <PortfolioItem active>All</PortfolioItem>
            <PortfolioItem>HTML</PortfolioItem>
            <PortfolioItem>Photoshop</PortfolioItem>
            <PortfolioItem>Wordpress</PortfolioItem>
            <PortfolioItem>Mobile</PortfolioItem>
        </PortfolioList>
        <div>
     {imagesList}
        </div>
        
    </PortfolioSection>
    );
}

export default Portfolio;