import React from 'react';
import {Link} from 'react-router-dom';
import {NavBarSection,LogoText,UlList,Logo,Anchor,ListItem}  from   './style.js';

function Navbar() { 
    return (
       
                <NavBarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                <UlList>
                    <ListItem><Link className="link" to="/">Home</Link></ListItem>
                    <ListItem><Anchor href="#">Work</Anchor></ListItem>
                    <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                    <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                    <ListItem><Anchor href="#">About</Anchor></ListItem>
                    <ListItem><Link className="link" to="/contact">Contact</Link></ListItem>
                </UlList>
                
            </div>
            
        </NavBarSection>

        
    );
}

export default Navbar;