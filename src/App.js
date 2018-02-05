import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Adam from './Person/Person';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changedValue : "Hello World"
    }
    
  }

  changeValueHandler = (event) => {
    this.setState({
      changedValue: event.target.value
    })
    console.log("value", this.state.changedValue);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-body">
          <Adam val={this.state.changedValue} changed={(e) => {this.changeValueHandler(e)}}/>
        </div>
      </div>
      
    );
  }
}

export default App;
