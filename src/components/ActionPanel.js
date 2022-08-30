import React, {Component} from 'react';
import Button from '@mui/material/Button';

export default class ActionPanel extends Component {
    render() {
        return (
            <div className="action-panel">
            <Button variant="contained" onClick={() => this.props.changeDisplayColor('red')}>
                red
            </Button>
            <Button variant="contained" onClick={() => this.props.changeDisplayColor('green')}>
                green
            </Button>
                <Button variant="contained" onClick={() => this.props.changeDisplayColor('blue')}>
                blue
            </Button>
        </div>
);
    }
}