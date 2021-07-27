import React from 'react';
import {Container,Row} from 'react-bootstrap';

import Card from '../components/Card';

import search from '../assets/images/man2ipad.jpg';
//import devgrub from '../assets/images/man2ipad.jpg';
import linkedin from '../assets/images/manipad.jpg';
import github from '../assets/images/matari.jpg';

class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
         
            items: [
                {
                    id:0,
                    title: 'Search',
                    subTitle: 'Search the web for developers',
                    imgSrc: search,
                    link: 'https://google.com',
                    selected:false
                },
                {
                    id:1,
                    title: 'Matari Howard',
                    subTitle: 'linkedin',
                    imgSrc: linkedin,
                    link: 'https://www.linkedin.com/in/matari-howard-462a471a2/',
                    selected:false
                },
                {
                    id:2,
                    title: 'Projects',
                    subTitle: 'A social network for developers',
                    imgSrc: github,
                    link: 'https://github.com/howardmatari',
                    selected:false
                }
            ]
        }
    }
  
    handleCardClick = (id,card)=>{
        let items = [...this.state.items];
        items[id].selected=items[id].selected ? false:true;

        items.forEach(item=>{
            if(item.id !==id) {
                item.selected=false;
            }
        });

        this.setState({
            items
        });

    }

    makeItems = (items) => {
        return items.map(item=>{
           return <Card item = {item} click={(e=>this.handleCardClick(item.id,e))} key={item.id} />
        })
    }

    render() {
        return (
         <Container fluid={true}>
            <Row className='justify-content-around'>
                {this.makeItems(this.state.items)}
            
            
            </Row>
         
         </Container>
        );
    }

}

export default Carousel;