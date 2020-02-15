import React, { Component } from 'react';
import axios from 'axios'
import withRequest from '../lib/withRequest'


class Post extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>user ID</td>
                            <td>ID</td>
                            <td>Title</td>
                            <td>Body</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map(post =>(
                            <tr key={post.id}>
                                <td>{post.userId}</td>
                                <td>{post.id}</td>                                
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
        );
    }
}

export default withRequest('http://jsonplaceholder.typicode.com/posts')(Post);
