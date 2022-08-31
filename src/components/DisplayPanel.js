import React, {Component} from 'react';

export default class DisplayPanel extends Component {
    render() {
        return (
            <div className="display-panel">
                {this.props.snakeDirection}
            </div>
        )
    }
}