import React ,{useState,useEffect}from 'react';
import {Prof,SpanNorm,ParentSpan,SpTitle,ProfileItem,ProfileList,SpanProfile,Profileskills,Title,SpanTitle,Skills,SkillsDesc,Bar,SpanPerc,Parent} from './style.js';
import axios from 'axios'

function Profile() {
    const[profileData,setProfile]=useState([]);
    const[skillsData,setSkills]=useState([]);

    useEffect(()=>{
    axios.get('js/data.json').then(res =>{
        console.log(res.data.profile);
        setProfile(res.data.profile);
        setSkills(res.data.skills)
    })
    },[])
    const profileList=profileData.map((pro)=>{
        return(
            <ProfileItem key={pro.id}>
            <SpanProfile >{pro.name}</SpanProfile>
            <SpanNorm web={pro.class}>{pro.value}</SpanNorm>
        </ProfileItem>
        )
    })
    const skillsList=skillsData.map((skill)=>{
        return(
            <Bar key={skill.id}>
                <SpanTitle>{skill.name}</SpanTitle>
        <SpanPerc>{skill.value}</SpanPerc>
                    <Parent>
                        <ParentSpan className={skill.class}></ParentSpan>
                    </Parent>
                </Bar>
        )
    })
    return (
        <Profileskills>
        <div className="container">
            <Prof>
           
                <ProfileList>
                <Title><SpTitle>My </SpTitle>Profile</Title>
                   {profileList}
                </ProfileList>
                </Prof>
                <Skills>
                    <Title>Some <SpTitle>skills</SpTitle></Title>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                   {skillsList}
                </Skills>
         
   
            
        </div>
    </Profileskills>
    );
}

export default Profile;