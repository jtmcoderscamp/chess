import BoardPosition from "./boardPosition";

export default class BoardSituation {
    
    /*_previousSituation;
    _actualPosition;*/

    constructor(actualPosition = null, previousSituation = null) {

        if (previousSituation !== null && ! newBoardSituation instanceof  BoardSituation){
            throw new Error('Argument supplied as previousSituation has incorrect data type, expected null or BoardSituation');
        }

        if (actualPosition !== null && ! actualPosition instanceof  BoardPosition){
            throw new Error('Argument supplied as boardPosition has incorrect data type, expected null or BoardPosition');
        }
       
        this._previousSituation = previousSituation; 
        if( actualPosition===null){
        this._actualPosition = new BoardPosition().startPosition();
        }
     }

    get position() {
            // TODO: this function should return current position on the board as an 8x8 array of ChessPiece objects
            return this._actualPosition.position;
    }
    get previousSituation() {
            // TODO: this function should return previous situation or null if there's none (in case of the first position)
            return this._previousSituation;
    }
 }
    