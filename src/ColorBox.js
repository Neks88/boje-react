import React, { Component } from 'react';
import "./ColorBox.css";

export default class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'purple'
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        const randNum1 = Math.floor(Math.random() * 255);
        const randNum2 = Math.floor(Math.random() * 255);
        const randNum3 = Math.floor(Math.random() * 255);

        const kutija = e.target;
        this.setState(state => {
            return {
                ...state,
                color: `rgb(${randNum1}, ${randNum2}, ${randNum3})`
            }
        })
    }
    render() {
        return (
            <div className="ColorBox" style={{
                backgroundColor: this.state
                    .color
            }} onClick={this.handleClick}>
                <h1>Boja</h1>
            </div>
        )
    }
}
