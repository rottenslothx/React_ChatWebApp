import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import {Redirect} from 'react-router-dom'


class Chatroom extends Component {

    state = {
        socket : null,
        message : [
            {text: "hi", member: 'Kuy1'},
            {text: "hi idiot", member: 'Kuy2'},
            {text: "byeeee", member: 'Kuy1'},
            {text: "bye", member: 'Kuy2'}

        ]
    };

    componentDidMount(){
        if(this.state.socket == null){
            const socket = socketIOClient("http://localhost:8080")
            socket.on("message", (message) => {
                this.addMessage(message)
            })


            this.setState({socket : socket})
        }
    }
        

    onMessageSent = message => {
        this.addMessage(message)
        
        this.state.socket.emit("emit", {...message})
    }


    addMessage = message => {
        this.setState({message: [...this.state.message,{...message}]})
    }
    render() {

        if(this.props.location.name == null){
            return <Redirect to= '/chat'/>
        }

        const {name} = this.props.location
        return (
            <div>
                <MessageList message={this.state.message}/>
                <MessageForm onMessageSent={this.onMessageSent} currentMember={name}/>
            </div>
        )
    }
}

export default Chatroom
