import React, { Component } from 'react';
import ContentView from './contentView';
import "./App.css" ;

class App extends Component {
  componentDidMount() {
    this.getLuke(this.API_URL);
  }
  state = { luke: "" };
  
  API_URL = "https://swapi.co/api/people/1/";
  
  getLuke = async function (url) {
    
    const resp = await fetch(url);
    const data =  await resp.json();
    this.setState({luke: data});
  }
    
  render() {
    return (
    <div>
      <h1>Star Wars</h1>
      <ContentView data={this.state.luke} />
    </div>
      )
  }
}

export default App;