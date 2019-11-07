export default class BoardSituation {
    constructor() {
    }

    get position() {
        // TODO: this function should return current position on the board as an 8x8 array of ChessPiece objects
        return [];
    }

    get previousSituation() {
        // TODO: this function should return previous situation or null if there's none (in case of the first position)
        return new BoardSituation();
    }
}