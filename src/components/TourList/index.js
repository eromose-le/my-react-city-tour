import React, { Component } from 'react'
import './TourList.scss';
import Tour from '../Tour/Tour';
import { tourData } from '../tourData';


export default class TourList extends Component {
  // setting state and array
  state={
    tours: tourData
  };
  removeTour = id => {
    //desturcturing
    const {tours} = this.state;
    //tours that do ot match the ID 
    const sortedTours = tours.filter(tour => tour.id !==id)
    this.setState({
      tours: sortedTours
    });
  };
  render() {
    // destructioning
    const { tours } = this.state;

    return (
      <section className="tourlist">
      {/* loop through the Array list without applying the content yet */}
        {tours.map(tour => (
            <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}
