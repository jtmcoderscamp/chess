import BoardCoordinates from "./game/board/boardCoordinates";
import BoardSituation from "./game/board/boardSituation";
import ChessPiece from "./game/board/chessPiece";
import MoveFinder from "./game/moveFinding/moveFinder";
import MockBoardInterface from "./interface/mockBoardInterface";

export default class Game {
    constructor(parentNode, DisplayConstructor = MockBoardInterface, moveFinder = new MoveFinder(), whiteOnMove = true) {
        this._moveFinder = moveFinder;

        this._currentSituation = new BoardSituation();
        this._onMove = whiteOnMove ? "white" : "black";

        this._display = new DisplayConstructor(parentNode, this.clickField.bind(this));
        this._display.setPosition(this._currentSituation.position);

        this._selectedField = null;
        this._selectedPiece = null;
    }

    clickField(coords) {
        if (this._selectedField) {
            if (BoardCoordinates.areEqual(this._selectedField, coords)) {
                this.deselectField();
            } else {
                this.tryMove(this._selectedField, coords);
            }
        } else {
            this.selectField(coords);
        }
    }

    /**
     * Checks whether selected piece - if any - belongs to the player currently on the move
     * @param {BoardCoordinates} coords 
     */
    sideOnMove(coords) {
        const piece = this._currentSituation.position[coords.x][coords.y];
        return piece && piece.color === this._onMove;
    }

    findPieceMoves(coords, situation = this._currentSituation) {
        const piece = this._currentSituation.position[coords.x][coords.y];
        if (!piece) throw new Error("No piece in specified coordinates")
        return this._moveFinder.findMoves(piece.pieceType, situation, coords, piece.color);
    }

    selectField(coords) {
        if (this.sideOnMove(coords)) {
            const availableMoves = this.findPieceMoves(coords);
            if (availableMoves.length > 0) {
                this._selectedField = new BoardCoordinates(coords.x, coords.y);
                this._display.highlightFields(availableMoves);
            }
        }
    }

    deselectField() {
        this._selectedField = null;
        this._display.clearHighlights();
    }

    tryMove() {

    }
}