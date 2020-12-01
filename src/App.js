import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import Footer from './components/Footer';
import HomePage from './pages/Homepage';
import AboutPage from './pages/Aboutpage';
import ContactPage from './pages/Contactpage';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      title: 'Matari Howard',
      headerLinks: [
        {title: 'Home',path:'/'},
        {title: 'About',path:'/About'},
        {title: 'Contact',path:'/Contact'}
      ],
      home: {
        title: 'React Portfolio',
        subtitle: 'Projects that make a difference',
        text: 'Checkout my projects below'
      },

      about: {
        title: 'About Me',
        
      },

      contact: {
        title: 'Contact',
        
      }

    }
  }
  render () {
    return (
      <Router>
       <Container className="p-0" fluid={true}>
        <Navbar className="border-bottom" bg='transparent' expand='lg'>
         <Navbar.Brand>Matari Howard</Navbar.Brand>
  
         <Navbar.Toggle className= 'border-0' aria-control='navbar-toggle'/>
         <Navbar.Collapse id='navbar-toggle'>
           <Nav className='ml-auto'>
           <Link className='nav-link' to='/'>Home</Link>
           <Link className='nav-link' to='/about'>About</Link>
           <Link className='nav-link' to='/contact'>Contact</Link>
           </Nav>
          
         </Navbar.Collapse>
        
        </Navbar>
            <Switch>
       
        <Route path='/about' exact render={()=> <AboutPage title={this.state.about.title}/>} />
        <Route path='/contact' exact render={()=> <ContactPage title={this.state.contact.title}/>} />
        <Route  render={()=> <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text}/>}/>
            </Switch>
  
        <Footer/>
        
          
        </Container>  
      </Router>
    );
  }
}


//function App() {

  

export default App;
