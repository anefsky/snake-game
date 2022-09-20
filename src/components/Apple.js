export default class Apple {

    constructor(gridSize) {
        this.gridSize = gridSize;
        this.appleCell = {};
        this.createInitApple();
    }

    getAppleCell = () => {
        return this.appleCell;
    }

    createInitApple() {
        this.appleCell = {row: 7, col: 7};
    }

}