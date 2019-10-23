import React from 'react';
//import './App.css';
import Background2 from './background'

const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
};


const Navbar = (props) => {
  const backgroundColor = props.backgroundColor  
  return(  
        <nav style = {{backgroundColor:backgroundColor}}>
           <ul>
           <li><a href ="#">Home</a></li>
           <li><a href ="#">Home</a></li>
           <li><a href ="#">Home</a></li>
           <li><a href ="#">Home</a></li>
           <li><a href ="#">Home</a></li>
           </ul>
        </nav>
  );


}
const  days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const color = ["green","red","orange","yellow","silver"]

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       date:'',
       height:'',
       color:'',
       tareek:''
    }
    this.setdate = this.setdate.bind(this);
    // this.setColor= this.setColor.bind(this);
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.setdate(),
      1000
    );
  }
  
  // setColor(){
  //   const m = Math.floor(Math.random() * 5)
  //   this.setState({
  //      date:'',
  //      height:'',
  //      color: color[m]

  //   })
  //   const backgroundColor = color[m]
  // }

  setdate(){
    const d = new Date().getDay() 
    const m = Math.floor(Math.random() * 5)
    const l = new Date().toLocaleString()
     this.setState({
       date : days[d] ,
       height:window.innerHeight +'px',
       color:color[m],
       tareek:l
     })
  }
  render() {
    let h = this.state.date ;
    let height = this.state.height
      let color = this.state.color
    if(h == 'Wednesday'){
    return (
      <div style= {{height:height, width: '100%', backgroundColor: color }}>
        <h3>What date is it? :{this.state.date}</h3>
        {/* <button onClick={this.setdate}>Clickme</button> */}
        <CurrentDate date={this.state.date} />
        <Navbar backgroundColor = {this.state.color} />
      </div>
    );}
   else if(h == 'Wednesday') {
      let height = this.state.height
      let color = this.state.color
      return(
      <div  id ="hello" style={{width:'100%',height:height,backgroundColor:color}}>This is {this.state.date}   and this is the date today {this.state.tareek}</div>)
    }  
    else {
     return(
      <h2>{this.state.date}</h2>
     )
    }
  }
};

export default Calendar;
