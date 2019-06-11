import React from 'react';

class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        // change code below this line
        this.handleChange = this.handleChange.bind(this)
        // change code above this line
    }

    // change code below this line
    handleChange(e) {
        this.setState({
            input: e.target.value
        })
    }

    // change code above this line
    render() {
        return (
            <div>
                { /* change code below this line */}
                <input type='text' onChange={this.handleChange} value={this.state.input}/>
                { /* change code above this line */}
                <h4>Controlled Input:</h4>
                <p>{this.state.input}</p>
            </div>
        );
    }
};