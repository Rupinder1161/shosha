import React ,{ Component }from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const textAreaStyles = {
    width: 235,
    margin: 5
  };
  
  class MyToDoList extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
        userInput: '',
        toDoList: [],
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e) {
     e.preventDefault();
      let newArray = this.state.toDoList.slice();    
      newArray.push(this.state.userInput);
      this.setState( {
        userInput:'',
        toDoList: newArray,
      });
    }
    handleChange(e) {
      this.setState({
        userInput: e.target.value
      });
    }

    render() {
      const items = this.state.toDoList.map(i => <li key={this.state.id}>  + {i}<button onClick={this.remove}>x</button></li>) ;
      return (
        <div>
          <textarea
            onChange={this.handleChange}
            value={this.state.userInput}
            style={textAreaStyles}
            placeholder="Separate Items With Commas" /><br />
          <button onClick={this.handleSubmit}>Create List</button>
          <button onClick={this.clearjob}>Hello</button>
          <h1>My "To Do" List:</h1>
          <ul>
          {items}
          </ul>
        </div>
      );
    }
  };
  export default MyToDoList;