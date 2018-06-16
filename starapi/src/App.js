import React, { Component } from 'react';
import ContentView from './contentView';

class App extends Component {
  componentDidMount() {
    this.getLuke();
  }

  API_URL = "https://swapi.co/api/people/1/";

  state = { luke: "" };

  async function getLuke() {
    const resp = await fetch(API_URL);
    const data =  await resp.json();
    this.setState({luke: data});
  }
    
  render() {
    return <ContentView data={this.state.luke} />
  }
}

export default App;