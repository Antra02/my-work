import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      BtnValue: 'OK'
    };
    this.handleChange = this.handleChange.bind(this);
    this.displayNameHandler = this.displayNameHandler.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value,
      BtnValue: 'OK'
    });
  }
  displayNameHandler(event) {
    this.setState({
      BtnValue: this.state.value,
      value: ''
    });
  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Enter a value and click OK button</h1>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <button id="myDisplayBtn" className="btn btn-primary" onClick={this.displayNameHandler}> {this.state.BtnValue} </button>
          <p><em>You entered: {this.state.value}<span id="mySpan"></span></em></p>
          <App2 ChildValue={this.state.value}/>
        </div>
      </div>
    );
  }
}
class App2 extends Component {
  render() {
    return (
      <div className="App2">
          <h3>Clicking the button will display your value:- {this.props.ChildValue}</h3>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
