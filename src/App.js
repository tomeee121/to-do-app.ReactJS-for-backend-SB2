import './App.css';

import React, {Component} from 'react';
import Counter from "./components/counter/counter";

class App extends Component {
  render() {
    return (
        <div className="App">
            Counter
            <div>
                <Counter></Counter>
            </div>
        </div>
    );
  }
}

export default App;



