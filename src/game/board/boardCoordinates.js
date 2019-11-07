export default class BoardCoordinates {
    constructor(posX, posY) {
        this.x = posX;
        this.y = posY;
    }

    static valid(coords) {
        return coords.x <= 7 &&
            coords.y <= 7 &&
            coords.x >= 0 &&
            coords.y >= 0;
    }
}