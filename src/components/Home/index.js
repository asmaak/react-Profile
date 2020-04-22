import React from 'react';
import {Hom,HomeBtn,HomeDesc,HomeInfo,HomeInformation,HomeTitle,Span}   from './Style.js';

function Home() {
    return (
        <Hom>
        <div className="container">
            <HomeInformation>
                <HomeTitle>Hamzaaa Nabil</HomeTitle>
                < HomeInfo>Creative Director</HomeInfo>
                <HomeDesc>
                    Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                </HomeDesc>
                <HomeBtn>Let's Begin</HomeBtn>
            </HomeInformation>
        </div>
    </Hom>
    
    );
}

export default Home;