import './App.css';

import React, {Component} from 'react';
import Counter from "./components/counter/counter";
import ToDoApp from "./components/to-do/ToDoApp";

class App extends Component {
  render() {
    return (
        <div className="App">
            <div>
                {/*<Counter></Counter>*/}
                <ToDoApp/>
            </div>
        </div>
    );
  }
}

export default App;



