import React from 'react';

export default class Fruits extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Fruits:</h2>
                { /* change code below this line */}

                <NonCitrus/>
                <Citrus/>

                { /* change code above this line */}
            </div>
        );
    }
}

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                { /* change code below this line */}

                <Fruits/>

                { /* change code above this line */}
                <Vegetables/>
            </div>
        );
    }
}

const NonCitrus = () => {
    return (
        <ul>
            <li>Apples</li>
            <li>Blueberries</li>
            <li>Strawberries</li>
            <li>Bananas</li>
        </ul>
    )
};

const Citrus = () => {
    return (
        <ul>
            <li>Lemon</li>
            <li>Lime</li>
            <li>Orange</li>
            <li>Grapefruit</li>
        </ul>
    )
};

const Vegetables = () => {
    return (
        <ul>
            <li>Brussel Sprouts</li>
            <li>Broccoli</li>
            <li>Squash</li>
        </ul>
    )
};