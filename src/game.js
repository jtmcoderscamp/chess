import BoardCoordinates from "./game/board/boardCoordinates";
import BoardSituation from "./game/board/boardSituation";
import ChessPiece from "./game/board/chessPiece";
import MoveFinder from "./game/moveFinding/moveFinder";
import MockBoardInterface from "./interface/mockBoardInterface";
import BoardPosition from "./game/board/boardPosition";

export default class Game {
    constructor(parentNode, DisplayConstructor = MockBoardInterface, moveFinder = new MoveFinder(), whiteOnMove = true) {
        this._moveFinder = moveFinder;

        this._currentSituation = new BoardSituation();
        this._onMove = whiteOnMove ? "white" : "black";

        this._display = new DisplayConstructor(parentNode, this.clickField.bind(this));
        this._display.setPosition(this._currentSituation.position);

        this._selectedField = null;
        this._selectedPieceMoves = null;
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
                this._selectedPieceMoves = availableMoves;
                this._display.highlightFields(availableMoves);
            }
        }
    }

    deselectField() {
        this._selectedField = null;
        this._selectedPieceMoves = null;
        this._display.clearHighlights();
    }

    tryMove(startCoords, targetCoords) {
        const isEqualToTarget = (coords) => {return BoardCoordinates.areEqual(coords, targetCoords)}
        const legalMove = this._selectedPieceMoves.findIndex(isEqualToTarget) != -1;
        if( legalMove ) {
            const nextPosition = this.normalMove(startCoords, targetCoords);
            this._currentSituation = this._currentSituation.moveToNextPosition(nextPosition);
            this._display.setPosition(nextPosition);
            this.toggleSide();
            this.deselectField();
        }
    }

    normalMove(startCoords, targetCoords) {
        const oldPosition = this._currentSituation.position
        const nextPosition = BoardPosition.clonePositionArray(oldPosition);
        nextPosition[targetCoords.x][targetCoords.y] = oldPosition[startCoords.x][startCoords.y];
        nextPosition[startCoords.x][startCoords.y] = null;
        return nextPosition;
    }

    toggleSide(){
        this._onMove = this._onMove==="black" ? "white" : "black";
    }
}