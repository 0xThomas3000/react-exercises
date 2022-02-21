import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.handleClick2 = this.handleClick1.bind(this);
  }

  handleClick1() {
    console.log(this);
  }

  handleClick3 = () => console.log(this);

  render() {
    return (
      <div>
        <button onClick={this.handleClick1()}>Click 1</button>
        <button onClick={this.handleClick1}>Click 2</button>
        <button onClick={this.handleClick2}>Click 3</button>
        <button onClick={this.handleClick3}>Click 4</button>
      </div>
    );
  }
}

export default App;
