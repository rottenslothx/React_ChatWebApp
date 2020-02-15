import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ChatForm extends Component {

    state = {
        name: ""
    }

onChange = e => {
    this.setState({ name: e.target.value})
}


    render() {
        const {name} = this.state

        return (
            <Form>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input 
                        type="text" 
                        name="username" 
                        id="username" 
                        placeholder="Enter your name" 
                        value={name} 
                        onChange={this.onChange}
                    />
                </FormGroup>
                <Link to = {{pathname: '/chatroom', name: name}} >Join now!</Link>
            </Form>     
        )
    }
}
export default ChatForm
