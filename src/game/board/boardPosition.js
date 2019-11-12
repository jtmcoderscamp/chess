export default class BoardPosition {
        constructor() {
            this.position = this.createEmptyBoard();
            this.startPosition();
        }
    //pytanie czy jak się skończy rozgrywka, to będzie opcja klinknięcia "nowa gra",
    // bo wtedy trzeba chyba usunąć z konstruktora startPosition i wyczyścić tablicę nullami przed rozstawieneim pionków
    //o ile to ma byc w tej klasie
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
            this.position[7][0] = new ChessPiece("Rook", "black");
            this.position[7][1] = new ChessPiece("Knight", "black");
            this.position[7][2] = new ChessPiece("Bishop", "black");
            this.position[7][3] = new ChessPiece("Queen", "black");
            this.position[7][4] = new ChessPiece("King", "black");
            this.position[7][5] = new ChessPiece("Bishop", "black");
            this.position[7][6] = new ChessPiece("Knight", "black");
            this.position[7][7] = new ChessPiece("Rook", "black");
            this.position[0][0] = new ChessPiece("Rook", "white");
            this.position[0][1] = new ChessPiece("Knight", "white");
            this.position[0][2] = new ChessPiece("Bishop", "white");
            this.position[0][3] = new ChessPiece("Queen", "white");
            this.position[0][4] = new ChessPiece("King", "white");
            this.position[0][5] = new ChessPiece("Bishop", "white");
            this.position[0][6] = new ChessPiece("Knight", "white");
            this.position[0][7] = new ChessPiece("Rook", "white");
            for (let i = 0; i < 8; i++) {
                this.position[1][i] = new ChessPiece("Pawn", "white");
                this.position[6][i] = new ChessPiece("Pawn", "black");
            }
        }

        setNewPosition(piece, newBoardCoordinates, prevBoardCoordinates)
        {  //niektóre ruchy będą wymagały wywołania dwa razy tej metody, chyba że zrobić kolejne parametry które mogą być niewymagane
            if ((piece instanceof ChessPiece) && (newPieceCoordinates instanceof BoardCoordinates) && (prevPieceCoordinates instanceof BoardCoordinates)) {
                        
                this.position[prevPieceCoordinates.x][prevPieceCoordinates.y] = null;
                this.position[newPieceCoordinates.x][newPieceCoordinates.y] = piece;
            }
            else window.alert('Incorrect data given');
        }
    
    }
    