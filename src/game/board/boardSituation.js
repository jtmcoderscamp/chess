export default class BoardSituation {

    constructor(curr = null, prev = null) {
        // czy curr i prev pojawią się tylko w momencie jeżeli ktoś zapisał grę i chce do niej wrócić?

        if (this.validateBoard(prev) === false || this.validateBoard(curr) === false) {
            throw new Error("Unable to create board situation, given data is incorrect");
        }

        this.previousSituation = (prev === null) ? this.createEmptyBoard() : prev;
        if (curr === null) {
            this.situation = this.createEmptyBoard();
            this.startSituation();
        } else {
            this.situation = curr;
        }
    }

    validateBoard(board) {
        if (board === null) { return true; }
        if (!board.isArray()) { return false; }
        if (!board.length == 8) { return false; }

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (board[i][j] !== null && !(board[i][j] instanceof ChessPiece)) { return false; }
            }
        }
        return true;
    }

    get Situation() {
        // TODO: this function should return current position on the board as an 8x8 array of ChessPiece objects
        //ta funkcja powinna zwrócić bieżącą pozycję na planszy jako tablicę 8x8 obiektów ChessPiece
        return this.situation;
    }

    get PreviousSituation() {
        // TODO: this function should return previous situation or null if there's none (in case of the first position)
        return this.previousSituation;
    }

    startSituation() {   //nie wiem czy tu mam mieć figury w tablicy dostarczone jako argument
        //czy ja mam stworzyć używając new? 
        // jeżeli pion nie przetrzymuje swojej pozycji to raczej tak to wygląda
        //chyba że przy zmianie pozycji dostanę parament o poprzednie pozycji, 
        //wtedy nazwy unikatowe nie będę potrzebne i mogę mieć samo Rook 

        this.situation[7][0] = new ChessPiece("Rook", "black");
        this.situation[7][1] = new ChessPiece("Knight", "black");
        this.situation[7][2] = new ChessPiece("Bishop", "black");
        this.situation[7][3] = new ChessPiece("Queen", "black");
        this.situation[7][4] = new ChessPiece("King", "black");
        this.situation[7][5] = new ChessPiece("Bishop", "black");
        this.situation[7][6] = new ChessPiece("Knight", "black");
        this.situation[7][7] = new ChessPiece("Rook", "black");

        this.situation[0][0] = new ChessPiece("Rook", "white");
        this.situation[0][1] = new ChessPiece("Knight", "white");
        this.situation[0][2] = new ChessPiece("Bishop", "white");
        this.situation[0][3] = new ChessPiece("Queen", "white");
        this.situation[0][4] = new ChessPiece("King", "white");
        this.situation[0][5] = new ChessPiece("Bishop", "white");
        this.situation[0][6] = new ChessPiece("Knight", "white");
        this.situation[0][7] = new ChessPiece("Rook", "white");

        for (let i = 0; i < 8; i++) {
            this.situation[1][i] = new ChessPiece("Pawn", "white");
            this.situation[6][i] = new ChessPiece("Pawn", "black");
        }
    }

    setNewSituation(piece, newBoardCoordinates, prevBoardCoordinates)//(piece, newBoardCoordinates)
    {
        if ((piece instanceof ChessPiece) && (newBoardCoordinates instanceof BoardCoordinates) && (prevBoardCoordinates instanceof BoardCoordinates)) {
            this.previousSituation = [...this.situation];
            //opcja bez prevBoardCoordinates: jeżeli pion nie ma informacji o  swojej pozycji  i nie została ona dostarczona jako zmienna
            //to musze go wyszukać w tablicy
            //czyli jego nazwa i kolor muszą być unikatowe  (np pionek musi mieć nr)
            this.situation[prevBoardCoordinates.x][prevBoardCoordinates.y] = null;
            this.situation[boardCoordinates.x][boardCoordinates.y] = piece;
        }
        else window.alert('Incorrect data given');
    }

    undoMove() {
        this.situation = [...this.previousSituation];
    }

    createEmptyBoard() {
        let board = [];
        for (let i = 0; i < 8; i++) {
            board[i] = [];
            board[i][7] = null;
            board[i].fill(null);
        }
        return board;
    }

}