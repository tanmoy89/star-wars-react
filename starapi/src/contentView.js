import React from 'react';

const ContentView = ({data}) => {
  return (
  <div className="ba bw1 br4 shadow-3 bg-red ">
    <p>Name: {data.name}</p>
    <p>Born: {data.birth_year}</p>
    <p>Gender: {data.gender}</p>
    <p>Homeworld: {data.homeworld}</p>
  </div>
  );


}
export default ContentView;