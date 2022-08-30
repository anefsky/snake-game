import React, {Component} from "react";

export default class Grid extends Component {
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
 
    cell = (row, col) => {
        return (<div className={`cell ${this.isOnSnake(row,col) ? 'snake' : ''}`}>
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