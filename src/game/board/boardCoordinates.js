export default class BoardCoordinates {
    constructor(posX, posY) {
        this.x = posX;
        this.y = posY;
    }

    static valid(coords) {
        const { x, y } = coords;

        return Number.isInteger(x) &&
            Number.isInteger(y) &&
            x <= 7 &&
            y <= 7 &&
            x >= 0 &&
            y >= 0;
    }

    static areEqual(coords1, coords2){
        return coords1.x === coords2.x && coords1.y === coords2.y;
    }
}