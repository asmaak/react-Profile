import React from 'react';
import {Contac,TextArea,InputSub,Title,Span,FormInput,Form,InputEmail,InputSubmit,InputText} from  './style.js';
import Footer from './../Footer'
function Contact() {
    return (
        <Contac>
        <div className="container">
            <Title><Span>Drop </Span>Me A line</Title>
            <Form action="">
                <FormInput>
                    <InputText type="text" placeholder="Your Name"/>
                    <InputEmail type="email" placeholder="Your Email"/>
                </FormInput>
                <InputSub type="text" className="sub" placeholder="Your Subject"/>
                <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                <InputSubmit type="submit" value="Send Message"/>
            </Form>
        </div>
        <Footer/>
    </Contac>
    
    
    );
}

export default Contact;