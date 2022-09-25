import React, {Component} from 'react';
import ActionPanel from './ActionPanel';
import DisplayPanel from './DisplayPanel';
import Board from './Board';
import Snake from './Snake';
import Apple from './Apple';

export default class Game extends Component {
    gridSize = 10;
    snake = new Snake(this.gridSize);
    apple = new Apple(this.gridSize);
    
    constructor(props) {
        super(props);
         this.state = {
            snakeDirection: "north",
            snakeArr: this.snake.getSnakeArray(),
            appleCell: this.apple.getAppleCell()
        }
    }

    componentDidMount = () => {
        this.runIntervals();
    }

    isEatingApple = () => this.state.appleCell.row === this.state.snakeArr[0].row &&
        this.state.appleCell.col === this.state.snakeArr[0].col;

    runIntervals = () => {
        setInterval( () => {
            this.isEatingApple() ? this.snake.grow() : this.snake.move();
            this.setState({snakeArr: this.snake.getSnakeArray()});
        }, 500);
    }

    changeDirection = direction => this.snake.setDirection(direction);

    render() {

        return (
            <div className="game">
                <Board size={this.gridSize} snake={this.state.snakeArr} 
                    apple={this.state.appleCell}/>
                <DisplayPanel snakeLength={this.state.snakeArr.length}/>
                <ActionPanel changeDir={this.changeDirection}/>
            </div>
        )
    }
}