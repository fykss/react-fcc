import React from 'react';
import ReactDOM from 'react-dom';

import Fruits from '../11_compose_react_components'

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                {/* change code below this line */}

                <Fruits/>
                <Vegetables/>

                {/* change code above this line */}
            </div>
        );
    }
}

const Vegetables = () => {
    return (
        <ul>
            <li>Brussel Sprouts</li>
            <li>Broccoli</li>
            <li>Squash</li>
        </ul>
    )
};

// change code below this line
ReactDOM.render(<TypesOfFood/>, document.getElementById('challenge-node'));