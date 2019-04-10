import React, { Component } from 'react'
import "./Tour.scss";

export default class Tour extends Component {
  //state to display Info 
  state = {
    showInfo:false
  };
  handleInfo = () =>{
    this.setState({
      //to flip the state of the previous state "ShowInfo"
      showInfo:!this.state.showInfo
    });
  };
  render() {
    // destructing the tour so the newArray can be updated
    // more of defining variables
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} 
          alt="" />
          {/* importing the removeTour to close the tour */}
          <span className="close-btn" onClick={() => {
            removeTour(id)
          }}>
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info{" "}
          <span onClick={this.handleInfo}>
            <i className="fas fa-caret-square-down" />
          </span>
        </h5>
        {/* if boolean statement */}
        {this.state.showInfo && <p>{info}</p>}
        </div>

      </article>
    )
  }
}
