import React, {Component} from 'react';
import ActionPanel from './ActionPanel';
import DisplayPanel from './DisplayPanel';
import Grid from './Grid';
import Snake from './Snake';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.gridSize = 10;
        this.snake = new Snake(this.gridSize);
        this.state = {
            displayColor: 'red',
            snakeArr: this.snake.getSnakeArray()
        }
        this.runIntervals();
    }

    runIntervals = () => {
        setInterval( () => {
            this.snake.move();
            this.setState( {snakeArr: this.snake.getSnakeArray()});
        }, 1000);
    }

    render() {

        return (
            <div className="game">
                <DisplayPanel displayColor={this.state.displayColor}/>
                <ActionPanel changeDisplayColor={this.changeColor}/>
                <Grid size={this.gridSize} snake={this.state.snakeArr}/>
            </div>
        )
    }
}