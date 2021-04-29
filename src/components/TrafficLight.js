import React, { Component } from "react";
import classnames  from "classnames";
import './TrafficLight.css';

const LIGHTACTIVE = ['red', 'yellow', 'green' ];

class TrafficLight extends Component{
    constructor(){
        super();
        this.currentLightIndex = 0;

        setInterval(() => {
            this.currentLightIndex += 1;
            if(this.currentLightIndex > 2){
                this.currentLightIndex = 0;
            }
            console.log(LIGHTACTIVE[this.currentLightIndex])
        }, 1000);
    }    

    render(){
        return(
            <div className="trafficlight">
                <div className={classnames('light', 'red', {'active': LIGHTACTIVE[this.currentLightIndex] === 'red'})}></div>
                <div className={classnames('light', 'yellow', {'active': LIGHTACTIVE[this.currentLightIndex] === 'yellow'})}></div>
                <div className={classnames('light', 'green', {'active': LIGHTACTIVE[this.currentLightIndex] === 'green'})}></div>
            </div>
        )
    }

}

export default TrafficLight;