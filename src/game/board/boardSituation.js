export default class BoardSituation {
        constructor(firstBoardPosition) {
            if(newBoardPosition instanceof  BoardPosition){
                this.boardPosition=firstBoardPosition;
                this.boardSituation=[];
            }
            else {
                 window.alert('Incorrect data given');
            }
        }
        get position() {
            // TODO: this function should return current position on the board as an 8x8 array of ChessPiece objects
            return boardPosition;
        }
        get previousSituation() {
            // TODO: this function should return previous situation or null if there's none (in case of the first position)
            return boardSituation;
        }
       
        setNewBoardSituation(newBoardPosition)
        {
            if(newBoardPosition instanceof  BoardPosition){
            this.boardSituation.unshift(this.boardPosition);
            this.boardPosition=newBoardPosition;
            }
            else {
                window.alert('Incorrect data given');
            }
        }
    }
    