import React, { Component } from 'react';
import {WorkTitle,Worksection,Line,Part,Span,PartDesc,PartTitle,Icon} from'./style.js';
import axios from 'axios';
class Work extends Component {
    state=({
        works:[]
    });
    componentDidMount(){
        axios.get('js/data.json').then(res =>{
            console.log(res.data.works)
            this.setState({
                works:res.data.works
            })
        })
    }
    render(){
        const {works}=this.state;
        const workList=works.map((workItem)=>{
            return(
                <Part  first={workItem.id} key={workItem.id}>
                <Icon  className={workItem.icon_name}></Icon>
            <PartTitle >{workItem.title}</PartTitle>
                <Line />
                <PartDesc>
                    {workItem.body}
                </PartDesc>
            </Part> 
            )
        })
    return (
        <Worksection>
        <div className="container">
            <WorkTitle><Span>My</Span> Work</WorkTitle>
           {workList}
            
        </div>
    </Worksection>
    );
}
}

export default Work;