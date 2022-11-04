import './counter.css'
import React, {Component} from 'react';
import CounterButtons from "./counterbuttons";

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <div>
                <CounterButtons by={1} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButtons>
                <CounterButtons by={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButtons>
                <CounterButtons by={10} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButtons>
                <span style={{fontSize : "35px", color: "black"}}>{this.state.counter}</span><br></br>
                <button className={'reset'} onClick={this.reset}>Reset</button>
            </div>
        );
    }

    increment(by) {
        console.log(`w counter - ${by}`)
        this.setState(
            // {
        (prevState) => {return {counter: prevState.counter + by}}
            // counter: this.state.counter + by
        // }
        );
    }

    decrement(by) {
        this.setState(
            (prevState) => {return {counter: prevState.counter - by}}
        )
    }

    reset() {
        this.setState(
            (prevState) => {return {counter: 0}}
        )
    }

}

export default Counter;
