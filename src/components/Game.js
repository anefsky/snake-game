// import { Apple } from '@mui/icons-material';
import React, {Component} from 'react';
import ActionPanel from './ActionPanel';
import DisplayPanel from './DisplayPanel';
import Grid from './Grid';
import Snake from './Snake';
import Apple from './Apple';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.gridSize = 10;
        this.snake = new Snake(this.gridSize);
        this.apple = new Apple(this.gridSize);
        this.state = {
            snakeDirection: "north",
            snakeArr: this.snake.getSnakeArray(),
            appleCell: this.apple.getAppleCell()
        }
        this.runIntervals();
    }

    runIntervals = () => {
        setInterval( () => {
            this.snake.move();
            // this.snake.grow();
            this.setState( {snakeArr: this.snake.getSnakeArray()}); // causing unmounted error
        }, 500);
    }

    changeDirection = direction => this.snake.setDirection(direction);

    render() {

        return (
            <div className="game">
                <Grid size={this.gridSize} snake={this.state.snakeArr} apple={this.state.appleCell}/>
                <DisplayPanel snakeLength={this.state.snakeArr.length}/>
                <ActionPanel changeDir={this.changeDirection}/>
            </div>
        )
    }
}