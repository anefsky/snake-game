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

    setDirection = direction => this.direction = direction;

    getNewHead = () => {
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
        return {row: row, col: col};
    }    

    move = () => {
        this.snakeArray = [this.getNewHead(), ...this.snakeArray.slice(0,-1)]; // remove last
    }

    grow = () => {
        this.snakeArray = [this.getNewHead(), ...this.snakeArray];  // add new head, keep rest
    }

    getSnakeArray = () => [...this.snakeArray];
}