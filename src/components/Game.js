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
            snakeDirection: "north",
            snakeArr: this.snake.getSnakeArray()
        }
        this.runIntervals();
    }

    runIntervals = () => {
        setInterval( () => {
            this.snake.move();
            // this.snake.grow();
            this.setState( {snakeArr: this.snake.getSnakeArray()});
        }, 500);
    }

    changeDirection = direction => this.snake.setDirection(direction);

    render() {

        return (
            <div className="game">
                <Grid size={this.gridSize} snake={this.state.snakeArr}/>
                <DisplayPanel snakeLength={this.state.snakeArr.length}/>
                <ActionPanel changeDir={this.changeDirection}/>
            </div>
        )
    }
}