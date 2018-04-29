import React, {Component} from "react";

export default class Forecast extends Component {
    constructor(){
        super();
        this.state = {
            message: "Enter City"
        }
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}