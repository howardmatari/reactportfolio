import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props){

    return(
     
        <div>
        <Hero title={props.title} />

        <Content>
        <p>Hello, my name is Matari Howard and I am a full stack web developer located in Homestead, Florida.</p>
        
        <p>I am constantly learning new things and currently have experience with Express, Nodejs, REACT,
           MongoDB, SQL, HTML, and CSS</p>
        </Content>
        </div>
    )

}

export default AboutPage;