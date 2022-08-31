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
                    <Button variant="contained">
                        <ArrowLeftIcon fontSize="large"/>
                    </Button>
                    <div className="up-down-buttons">
                        <Button variant="contained">
                            <ArrowDropUpIcon fontSize="large"/>
                        </Button>
                        <Button variant="contained">
                            <ArrowDropDownIcon fontSize="large"/>
                        </Button>
                    </div>
                    <Button variant="contained">
                        <ArrowRightIcon fontSize="large"/>
                    </Button>
                </div>
            </div>
        );
    }
}