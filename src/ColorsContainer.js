import React, { Component } from 'react';
import Color from './ColorBox';
import "./BoxContainer.css";

export default class ColorsContainer extends Component {
    static defaultProps = {
        brojKutija: 18
    }

    constructor(props) {
        super(props);
        this.state = {
            colors: Array.from({ length: this.props.brojKutija })
        }
        // this.handleClick = this.handleClick.bind(this);
    }


    render() {
        return (
            <div className="BoxContainer">
                {this.state.colors.map(color => <Color onClick={this.handleClick} />)}
            </div>
        )
    }
}
