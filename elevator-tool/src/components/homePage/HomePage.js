import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './homePage.css';

export default class HomePage extends Component {

    floors = Math.floor(Math.random() * 10);
    elevators = Math.floor(Math.random() * 10);

    placeFloorElev(event) {
        event.preventDefault()

        floorEle: this.refs.floorEle.value;
        countEle: this.refs.countEle.value;

        // Clearing Input To Empty Srting
        this.refs.floorEle.value = '';
        this.refs.countEle.value = '';
    }

// Controlling Elevators at given point
controllerElevator.create = function (countEle, floorEle, floorsMin, floorMax) {

  //this has to be handled by the prototype, so it has access to the controller itself in the event handlers
  function listenNewEvent (newElev) {
    countEle.listenNewEvent(newElev, "atFloor");
    countEle.listenNewEvent(newElev, "floorOutOfMax");
    countEle.listenNewEvent(newElev, "isNeedingMaintenance");
    countEle.listenNewEvent(newElev, "Arivedfloor");
    countEle.listenNewEvent(newElev, "doorsAreOpen");
    countEle.listenNewEvent(newElev, "doorsAreClosed");
    countEle.listenNewEvent(newElev, "emptyElevator");
    countEle.listenNewEvent(newElev, "ElevatorOccupied");
  }

    switch (controllerElevator) {
        case "unoccupied":
        countEle.on(eventElvaLocation, emptyElevator);
          break;
        case "occupied":
        countEle.on(eventElvaLocation, ElevatorOccupied);
          break;
        case "need_maintenance":
        countEle.on(eventElvaLocation, isNeedingMaintenance);
          break;
      }
    };

    render() {
        return(
            <div className='fullPage'>

                    <div className='homeForms'>
                    <form onSubmit={this.placeFloorElev.bind(this)} >
                            <input className='inputFloorElev' type='text' placeholder='Floors' ref='floorEle' />
                            <input className='inputFloorElev' type='text' placeholder='Elevators' ref='countEle' />
                            <button className='buttonControl'>Start Study</button>
                        </form>

                        <br/><br/>
                        
                    </div>
                </div>
        );
    }
}