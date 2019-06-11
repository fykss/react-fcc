import React from 'react';


class StatefulComponent extends React.Component {
    constructor(props) {
        super(props);

        // initialize state here
        this.state = {
            name: 'vlad'
        }

    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
};