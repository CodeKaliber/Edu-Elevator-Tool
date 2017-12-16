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