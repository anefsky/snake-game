import React, {Component} from "react";

export default class Board extends Component {
    constructor(props) {
        super(props);

        console.log(props);
    }

    isOnSnake = (row, col) => {
        const snake = this.props.snake;
        for(let i = 0; i < snake.length; i++) {
            if(snake[i].row === row && snake[i].col === col) return true;
        }
        return false;
    }

    isOnApple = (row, col) => {
        const appleCell = this.props.apple;
        if(appleCell.row === row && appleCell.col === col) return true;
        return false;
    }

    isOnBothSnakeAndApple = (row, col) => this.isOnSnake(row, col) && this.isOnApple(row, col);
 
    cell = (row, col) => {
        return (<div className={`cell ${this.isOnSnake(row,col) ? 'snake' : ''} 
                ${this.isOnApple(row,col) ? 'apple' : ''}`}>
            {row},{col}
        </div>);
    }

    render() {
        const gridSize = this.props.size;

        return (
            <div className="grid">
                { Array(gridSize).fill('').map(
                    (_, row) => <div key={row} className="row">
                    {Array(gridSize).fill('').map((_, col) => 
                    <div key={row + '-' + col}>{this.cell(row,col)}</div>)}</div>)
                }
            </div>
        );
    }
}