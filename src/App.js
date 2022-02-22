import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      meaningOfLife: 47,
    }
  }

  handleClick = () => {
    this.setState({
      meaningOfLife: this.state.meaningOfLife + 1},// Bad for "multiple setState" (meaningOfLife maybe not the latest call)
      () => {
        console.log(this.state.meaningOfLife);
      }
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.meaningOfLife}
          </p>
          <button onClick={this.handleClick}>
            Update State
          </button>
        </header>
      </div>
    );
  }
}

export default App;
