export default class Snake {

    constructor(gridSize) {
        this.gridSize = gridSize;
        this.snakeArray = [];
        this.createInitSnake();
    }

    createInitSnake() {
        const middleCell = {row: Math.floor(this.gridSize / 2), 
            col: Math.floor(this.gridSize / 2)};
        
        this.snakeArray = [
            {row: middleCell.row + 1, col: middleCell.col},
            middleCell,
            {row: middleCell.row - 1, col: middleCell.col}
        ]
    }

    grow = () => {
        const arr = this.snakeArray;
        this.snakeArray = [{row: arr[0].row + 1, col: arr[0].col}, ...arr];
    }

    move = () => {
        const arr = this.snakeArray;
        this.snakeArray = [{row: arr[0].row + 1, col: arr[0].col}, ...arr.slice(0,-1)];
    }

    getSnakeArray = () => [...this.snakeArray];
}