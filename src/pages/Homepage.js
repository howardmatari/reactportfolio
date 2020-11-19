import React from 'react'; 
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

function HomePage(props){

    return(
       <div>
        <Hero title={props.title}/>
        <Carousel/>
        <a href="https://docs.google.com/document/d/1CTfsIS3YwKu7rVcKIE-Rl2wuPpOZiZD1VzyAZIQbNIg" target="_blank">Resume</a>
        <a href="https://enigmatic-journey-63404.herokuapp.com/" target="_blank">Project 1</a>
        <a href="https://evening-badlands-50066.herokuapp.com/" target="_blank">Project 2</a>
        <a href="https://fathomless-plateau-66925.herokuapp.com/exercise?" target="_blank">Project 3</a>
        <a href="https://warm-dawn-68504.herokuapp.com/" target="_blank">Project 4</a>
        <a href="https://protected-atoll-76403.herokuapp.com" target="_blank">Project 5</a>
        <a href="https://modernmediamichael.github.io/firstproject/" target="_blank">Project 6</a>
        </div>
    )

}

export default HomePage;