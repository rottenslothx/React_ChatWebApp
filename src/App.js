import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './user/User'
import Post from './post/Post'
import {Route, Link} from 'react-router-dom'
import Request from './lib/Request'
import chatroom from './chat/Chatroom.js'
import ChatForm from './chat/ChatForm';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';


class App extends Component {
  state = {
    name : 'FutureSkill'
  }

  onNameChange = name => {
    this.setState({name: name})
  }

  render() {
    
    const {name} = this.state; //destructuring name from state.name
    return (
      <div>
         <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/users">users</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/posts">Posts</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/chat">chat</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

          <Route path="/users" component={User}/>
          <Route path="/posts" component={Post}/>
          <Route path="/chatroom" component={chatroom}/>
          <Route path="/chat" component={ChatForm}/>
      </div>

     
    );
  }
}

export default App;
