import ChessPiece from "./chessPiece";

export default class BoardPosition {
        constructor() {
            this.position = this.createEmptyBoard();
        }

        createEmptyBoard() {
            let board = [];
            for (let i = 0; i < 8; i++) {
                board[i] = [];
                board[i][7] = null;
                board[i].fill(null);
            }
            return board;
        }

        startPosition() {
            this.position[0][7] = new ChessPiece("rook", "black");
            this.position[1][7] = new ChessPiece("knight", "black");
            this.position[2][7] = new ChessPiece("bishop", "black");
            this.position[3][7] = new ChessPiece("queen", "black");
            this.position[4][7] = new ChessPiece("king", "black");
            this.position[5][7] = new ChessPiece("bishop", "black");
            this.position[6][7] = new ChessPiece("knight", "black");
            this.position[7][7] = new ChessPiece("rook", "black");
            this.position[0][0] = new ChessPiece("rook", "white");
            this.position[1][0] = new ChessPiece("knight", "white");
            this.position[2][0] = new ChessPiece("bishop", "white");
            this.position[3][0] = new ChessPiece("queen", "white");
            this.position[4][0] = new ChessPiece("king", "white");
            this.position[5][0] = new ChessPiece("bishop", "white");
            this.position[6][0] = new ChessPiece("knight", "white");
            this.position[7][0] = new ChessPiece("rook", "white");
            for (let i = 0; i < 8; i++) {
                this.position[i][1]= new ChessPiece("pawn", "white");
                this.position[i][6] = new ChessPiece("pawn", "black");
            }
            return this;
        }

        moviePiece(piece, newBoardCoordinates, prevBoardCoordinates)
        {  
            if ((piece instanceof ChessPiece) && (newPieceCoordinates instanceof BoardCoordinates) && (prevPieceCoordinates instanceof BoardCoordinates)) {
                        
                this.position[prevPieceCoordinates.x][prevPieceCoordinates.y] = null;
                this.position[newPieceCoordinates.x][newPieceCoordinates.y] = piece;
            }
            else throw 'Incorrect data given'
        }
}
    