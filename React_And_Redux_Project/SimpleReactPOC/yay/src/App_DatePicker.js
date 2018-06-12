import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }
  handleClick(event) {
    alert(`Hi, the date is ${this.state.value}`);
    this.setState({
      value: '',
    });
  };

render(){
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>_Date_</h1>
          <label>Date</label><input type="date" name="_date" value={this.state.value} onChange={this.handleChange}/>
          <button id="myBtn" onClick={this.handleClick}> OK </button>
        </div>
      </div>
    );
  }
}
class App2 extends Component {
  render() {
    return (
      <div className="App2">
          <h3>The button displays your value {this.props.val}</h3>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
