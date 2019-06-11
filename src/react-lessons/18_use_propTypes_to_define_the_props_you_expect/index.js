import React, {ReactPropTypes} from 'react';

const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// change code below this line
Items.propTypes = {
    quantity: ReactPropTypes.number.isRequired
};
// change code above this line

Items.defaultProps = {
    quantity: 0
};

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Items/>
    }
};