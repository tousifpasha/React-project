import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Box   extends Component{
  constructor(props){
    super(props);
    this.state={};
}
  render(){
    return(
          <div className="grid-box"> 
            {this.props.number ? (
              <div className="given-number">{this.props.number}</div>
            ) : (
            <input type="text" className="dynamic-number"/>
            )}
          </div>
    );
  }

    
}

class App extends Component {
  render() {
    return (
      <div className="fullbox">
        <div className="mainbox">
          <div className="line1">
            <Box number={3}/>
            <Box />
            <Box />
            <Box number={2}/>
          </div>
        </div>
          <div className="line1">
            <Box />
            <Box number={4}/>
            <Box number={1}/>
            <Box />
          </div>
        <div className="mainbox">
          <div className="line1"> 
            <Box />
            <Box number={3}/> 
            <Box number={2}/>
            <Box />
          </div>
        </div>
          <div className="line1">
            <Box number={4}/>
            <Box />
            <Box />
            <Box number={1}/>
          </div>
      </div>
  
    )
  }
}

export default App;
