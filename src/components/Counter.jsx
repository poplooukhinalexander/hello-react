import React, { useState } from 'react';

class Counter extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { likes: 0 };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {      
        this.setState({likes: this.state.likes + 1});
    }

    decrement() {        
        this.setState({likes: this.state.likes - 1});
    }
    render(){
        return (
            <div>
                <h1>Likes:{this.state.likes}</h1>
                <button onClick={this.increment}>Like</button>
                <button onClick={this.decrement}>Dislike</button>        
            </div>        
        )
    }
}

export default Counter;