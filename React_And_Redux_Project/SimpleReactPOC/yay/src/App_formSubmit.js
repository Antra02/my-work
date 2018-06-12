import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);   
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    if (this.state.value) {
        event.preventDefault();
        alert('A value was submitted: ' +this.state.value);
        this.setState({value: ''});
    }else {
        alert ('Name is required');
    }
  }
  render() {
     return (
     <div className="container">
        <div className="jumbotron">
        <form onSubmit={this.handleSubmit}>
          <label>Enter name</label>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <input type="submit" value="SUBMIT"/>
        </form>
      </div>
     </div>
     );
  }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));

export default MyForm;