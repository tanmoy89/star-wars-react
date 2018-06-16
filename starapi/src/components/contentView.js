import React from 'react';
import "./ContentView.css";



const ContentView = ({data}) => {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     homeworld: ""
  //   };
  // }
  // componentDidMount() {
  //   this.getHomeWorld(this.data.homeworld);
  // }
  // getHomeWorld = async function (url) {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   this.setState({ homeworld: data });
  // }
  // render() {}
    return (
      <div className="ba bw1 br4 shadow-3 bg-red ">
        <p>Name: {data.name}</p>
        <p>Born: {data.birth_year}</p>
        <p>Gender: {data.gender}</p>
        <p>Homeworld: {data.homeworld}</p>
      </div>)

    }
export default ContentView;