export default class Snake {

    constructor(gridSize) {
        this.gridSize = gridSize;
        this.snakeArray = [];
        this.direction = null;
        this.createInitSnake();
    }

    createInitSnake() {
        const middleCell = {row: Math.floor(this.gridSize / 2), 
            col: Math.floor(this.gridSize / 2)};
        
        this.snakeArray = [
            {row: middleCell.row + 1, col: middleCell.col},
            middleCell,
            {row: middleCell.row - 1, col: middleCell.col}
        ];

        this.direction = 'west';
    }

    // grow = () => {
    //     const arr = this.snakeArray;
    //     this.snakeArray = [{row: arr[0].row + 1, col: arr[0].col}, ...arr];
    // }

    setDirection = direction => this.direction = direction;

    move = () => {
        const arr = this.snakeArray;
        let row = arr[0].row;
        let col = arr[0].col;
        switch(this.direction) {
            case 'north':
                row -= 1;
                break;
            case 'south':
                row += 1;
                break;
            case 'west':
                col -= 1;
                break;
            case 'east':
                col += 1;
                break;
            default:
        }
        this.snakeArray = [{row: row, col: col}, ...arr.slice(0,-1)];
    }

    grow = () => {
        const arr = this.snakeArray;
        let row = arr[0].row;
        let col = arr[0].col;
        switch(this.direction) {
            case 'north':
                row -= 1;
                break;
            case 'south':
                row += 1;
                break;
            case 'west':
                col -= 1;
                break;
            case 'east':
                col += 1;
                break;
            default:
        }
        this.snakeArray = [{row: row, col: col}, ...arr];
    }


    getSnakeArray = () => [...this.snakeArray];
}