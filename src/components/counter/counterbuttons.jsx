import PropTypes from "prop-types";
import './counter.css'
import React, {Component} from 'react';

class CounterButtons extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         counter : 0
    //     }
    //     this.increment = this.increment.bind(this);
    //     this.decrement = this.decrement.bind(this);
    //
    // }

    render() {
        return (
            <div className="counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
                {/*<button onClick={this.increment}>+{this.props.by}</button>*/}
                {/*<button onClick={this.decrement}>-{this.props.by}</button>*/}
                {/*<span style={{fontSize : "35px"}}>{this.state.counter}</span>*/}
            </div>
        );
    }

    // increment() {
    //     this.setState({
    //         counter : this.state.counter+this.props.by
    //     })
    //     {this.props.incrementMethod(this.props.by)}
    // }
    //
    // decrement(){
    //     this.props.decrementMethod(this.props.by)
    // }
}

export default CounterButtons;

CounterButtons.defaultProps = {
    by : 1
}

CounterButtons.propTypes = {
    by : PropTypes.number
}