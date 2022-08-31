import React, {Component} from 'react';
import Button from '@mui/material/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

export default class ActionPanel extends Component {
    render() {
        return (
            <div className="action-panel">
                <div className="button-set">
                    <Button variant="contained" 
                            onClick={() => this.props.changeDir('west')}>
                        <ArrowLeftIcon fontSize="large"/>
                    </Button>
                    <div className="up-down-buttons">
                        <Button variant="contained" 
                                onClick={() => this.props.changeDir('north')}>
                            <ArrowDropUpIcon fontSize="large"/>
                        </Button>
                        <Button variant="contained" 
                                onClick={() => this.props.changeDir('south')}>
                            <ArrowDropDownIcon fontSize="large"/>
                        </Button>
                    </div>
                    <Button variant="contained" 
                            onClick={() => this.props.changeDir('east')}>
                        <ArrowRightIcon fontSize="large"/>
                    </Button>
                </div>
            </div>
        );
    }
}