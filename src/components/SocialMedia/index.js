import React , {useState,useEffect}from 'react';
import axios from 'axios'
import {SocialMed,SocialP,Icon,SocialSpan,SpanInfo,SocialSection} from './style.js';

function SocialMedia() {
    const [social,setSocial]=useState([]);
    useEffect(()=>{
    axios.get('js/data.json').then(res=>{
        console.log(res.data.social);
        setSocial(res.data.social);
    })
    },[])
    const socialList=social.map((soc)=>{
        return(
            <SocialSection item={soc.id} key={soc.id}>
            <Icon className={soc.icon}></Icon>
            <SocialP>
                <SocialSpan className="info1">{soc.title}</SocialSpan>
        <SpanInfo className="info2">{soc.body}</SpanInfo>
            </SocialP>
        </SocialSection>
        )
    })
    return (
        <SocialMed>
            
      {socialList}
   
    </SocialMed>
    );
}

export default SocialMedia;